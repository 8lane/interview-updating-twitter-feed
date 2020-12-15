import queryString from "query-string";

// const endpoint = "__mocks__/tweets.json";
const endpoint =
  "https://bumble-twitter-interview.herokuapp.com/tom-christian/api";

const defaultParams = {
  count: 20
};

export function api() {
  return {
    fetchTweets: (params = {}) =>
      fetch(
        `${endpoint}?${queryString.stringify({ ...defaultParams, ...params })}`
      )
  };
}

export function checkResponse(response) {
  return new Promise((resolve, reject) => {
    if (response.status !== 200) {
      reject(response);
    }

    if (response && response.ok) {
      resolve(response.json());
    }
  });
}

export default api();
