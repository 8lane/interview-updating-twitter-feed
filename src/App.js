import React from "react";
import "./styles.css";

import useTweets from "./hooks/useTweets";
import Tweets from "./components/Tweets";

export default function App() {
  const { tweets, status } = useTweets({ interval: 2000 });

  const isLoading = status === "pending";

  return (
    <div className="App">
      <h1>Twitter feed</h1>
      {isLoading && <span className="loader">↺</span>}
      <section role="feed" aria-busy={isLoading}>
        <Tweets tweets={tweets} />
      </section>
    </div>
  );
}
