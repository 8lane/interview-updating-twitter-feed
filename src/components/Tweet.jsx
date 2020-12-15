import React from "react";

export default function Tweet({ id, text, username, timestamp, image }) {
  return (
    <article className="tweet" aria-posinset={id} aria-setsize="-1">
      <div className="tweet-wrapper">
        <div className="tweet-imgWrapper">
          <div className="tweet-imgPlaceholder">
            <img
              className="tweet-img"
              src={image}
              alt={username}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="tweet-content">
          <h3 className="tweet-username">{username}</h3>
          <p className="tweet-text">{text}</p>
        </div>
      </div>
    </article>
  );
}
