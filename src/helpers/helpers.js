export function tweetToObject(accumulator, tweet) {
  accumulator[tweet.id] = tweet;
  return accumulator;
}

export function isUniqueTweet(tweets, id) {
  return !tweets.hasOwnProperty(id);
}

export function sortByLatest(a, b) {
  if (a < b) {
    return 1;
  }

  if (a === b) return 0;

  return -1;
}
