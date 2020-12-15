# Requirements

The app should show the latest tweets after the first request
The list of tweets should update automatically every two seconds
The older tweets must be pushed down in the page
The newer tweets should come at the top
There should be no duplicate tweets on the page
There should be no skipped or missed tweets on the page
In case of any failure conditions the tweet updates can pause or stop, but no error messages should be shown to the user.

# API Specification

We have a virtual twitter server hosted on - bumble-twitter-interview.herokuapp.com/tom-christian

## API Info

There are several API endpoints at your disposal. You have to pick the most suitable one for your architecture decisions.
The API returns a JSON response and supports CORS
The JSON response contains the username, id, time stamp, image and text
The tweets will max out after 10,000 entries. After which you need to reset the database.
The API is designed to fail randomly with HTTP 50X errors (e.g. 500, 503 etc.) and you must handle this in your code. If it fails just try to fetch the updates again.
The server responses are always sorted with latest id on top
The API parameter count is optional (defaults to 20) and can be between 1 and 50

# API Endpoints

/api?count=X
Returns the latest X tweets

/api?count=X&afterId=ID
Returns X tweets created after the id ID

/api?count=X&beforeId=ID
Returns X tweets created before the id ID

/api?count=X&id=ID&direction=(-1 OR 1)
Returns X tweets with the ID and the direction in time (-1 for past, 1 for future)

/api?count=X&afterTime=TS
Returns X tweets created after the timestamp TS

/api?count=X&beforeTime=TS
Returns X tweets created before the timestamp TS

/api?count=X&time=TS&direction=(-1 OR 1)
Returns X tweets with timestamp TS and the direction in time (-1 for past, 1 for future)

/reset
This resets the database back to 100 entries. You can use it for your testing purposes.

# Technical Requirements

- Host your code on codesandbox.io as this will allow us to easily review and run your solution
- You don’t need to focus on the UI too much, a barebones version will do just fine
- You can choose any technology stack you are comfortable with
- Please don’t make any additional efforts on writing tests etc
- We will be reviewing your code on the following criteria:
  - Architecture decisions made
  - Readability of your code
  - Handling of edge cases, performance issues and stability of the webapp

Once you’ve completed the task please send us an email with your code sandbox link and we will keep you updated on the feedback as soon as possible.
