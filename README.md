# Description

This is a simple express server set up to use Yelp's API to get data about businesses
for the Owl Oiche React-Native app located [here](https://github.com/Owl-Oiche/Owl-Oiche).

This server exists to hide the API key provided by Yelp in a server hosted by heroku
[here](https://owl-oiche-yelp-api.herokuapp.com/).

To contact the Yelp API, make a request to:
https://owl-oiche-yelp.api.herokuapp.com/api/yelpResults followed by a query string.

You can use the function located in server/makeQuery.js to construct the query string.
makeQuery will allow you to construct an object of key-value pairs that Yelp's API
uses to narrow down your search.

TODO: Make readme better Patrick.
