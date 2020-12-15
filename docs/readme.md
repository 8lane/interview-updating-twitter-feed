# implementation notes

- on page load, get first set of tweets ✅
  - persit the timestamp of the first entry (latest tweet due to api sorting) ✅
- begin 2sec interval and re-fetch tweets whilst continually persisting the timestamp of the latest tweet for every follow up request ✅
- after successful request
  - check for duplicates and filter out ✅
  - merge new tweets into the current tweets ✅
- after failed fetch, catch, surpress & log error to console ✅

# thoughts / edge cases

- Chosen timestamp instead of id to cater for potential edge case of a tweet being deleted and the id not being usable as a method fetching subsequent data sets

- Chose to normalize and save the tweets into dictionary (object of objects) vs array of objects. This caters for a performance bottleneck when checking if there's any duplicates in the newly received tweets. E.g. if 1000s of tweets were present, it is faster to filter the new tweets on each request using object key notation against all of the existing tweets VS looping through 1000s of array items every 2 seconds e.g. using Array.find

- profile photos are 403ing. not sure if an issue with the test data or part of the test. In practise I'd have a placeholder thumbnail here and lazy load and then conditionally display the profile photos

- As subsqequent requests fail, the tweets that are eventually fetched after a successful request would be further behind in time. We could potentially bump the `count` param to fetch more tweets in order to catch up to the present
  - alternatively, a nicer UX would be to not auto-update the UI and have a "(X) new tweets available - click to refresh" which is what twitter does I believe
