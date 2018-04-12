# Description

This is a simple server built using Express JS, set up to use Yelp's API to get
data about businesses for the Owl Oiche React-Native app located [here](https://github.com/Owl-Oiche/Owl-Oiche).

This server exists to use Yelp's API in a mobile application built using React Native
[here](https://owl-oiche-yelp-api.herokuapp.com/).

To contact the Yelp API, make a request to:
https://owl-oiche-yelp.api.herokuapp.com/api/yelpResults followed by a query string
with any of these parameters:
https://www.yelp.com/developers/documentation/v3/business_search

For example, if you wanted to see businesses in San Francisco that are currently
open, you use this link:
https://www.yelp.com/developers/documentation/v3/business_search?location=San+Francisco&open_now=true

Within the server directory, there is a makeQuery.js file that is being used by the
Owl Oiche mobile app to construct our query strings. The function located in makeQuery
allows developers to construct a query string out of a JavaScript object. As an
example, if you invoked makeQuery with an object like so:

makeQuery({location: San Francisco, open_now: true})

The output of the function would be the string:

'?location=San+Francisco&open_now=true'
