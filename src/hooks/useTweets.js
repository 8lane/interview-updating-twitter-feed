import { useEffect, useState } from "react";

import api, { checkResponse } from "../api/api";
import { isUniqueTweet, tweetToObject } from "../helpers/helpers";

export default function useTweets({ interval }) {
  const [tweets, setTweets] = useState(null);
  const [pendingTweets, setPendingTweets] = useState([]);
  const [status, setStatus] = useState("idle");

  // Fire useEffect once on page load to get initial tweets + begin interval
  useEffect(() => {
    let latestTimestamp;

    const fetchTweets = async (options) => {
      try {
        // Show loading indicator
        setStatus("pending");

        // GET request
        const response = await api.fetchTweets(options);

        // Check the response is valid JSON + error handling
        const newTweets = await checkResponse(response);

        // Save timestamp of the latest tweet
        latestTimestamp = newTweets[0].timeStamp;

        // Hide loading indicator
        setStatus("resolved");

        return setPendingTweets(newTweets);
      } catch (error) {
        console.warn({ error });
        setStatus("rejected");
      }
    };

    fetchTweets();

    const refetcher = setInterval(() => {
      fetchTweets({ afterTime: latestTimestamp });
    }, interval);

    return () => {
      clearInterval(refetcher);
    };
  }, []);

  // Fire useEffect whenever we've successfully retrieved
  // tweets from the api (pendingTweets)
  useEffect(() => {
    let filteredTweets = {};

    return setTweets((currentTweets) => {
      // Filter the pendingTweets for duplicate ids comparing against our primary tweets state
      // Reduce into a dictionary format { 123: {}, 456: {} } and merge into our primary tweetsstate
      filteredTweets = pendingTweets
        .filter((pendingTweet) => isUniqueTweet(currentTweets, pendingTweet.id))
        .reduce(tweetToObject, {});

      return { ...filteredTweets, ...currentTweets };
    });
  }, [pendingTweets]);

  return {
    tweets,
    status
  };
}
