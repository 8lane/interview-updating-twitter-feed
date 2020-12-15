import React from "react";

import { sortByLatest } from "../helpers/helpers";

import Tweet from "./Tweet";

export default function Tweets({ tweets }) {
  if (!tweets) return null;

  return Object.keys(tweets)
    .sort(sortByLatest)
    .map((id) => <Tweet key={id} {...tweets[id]} />);
}
