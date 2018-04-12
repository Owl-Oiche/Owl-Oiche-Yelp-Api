const axios = require('axios');
const makeQuery = require('./makeQuery');
require('dotenv').config();

const API_KEY = process.env.YELP_API_KEY;

const yelp = (obj) => axios({
  method: 'GET',
  url: `https://api.yelp.com/v3/businesses/search${makeQuery(obj)}`,
  headers: { Authorization: `Bearer ${API_KEY}` },
})
  .then(result => { data: result.data.businesses })
  .catch(err => {
    throw err;
  });

const yelpIdSearch = (id) => axios({
  method: 'GET',
  url: `https://api.yelp.com/v3/businesses/${id}`,
  headers: { Authorization: `Bearer ${API_KEY}` },
})
  .then(result => { data: result.data })
  .catch(err => {
    throw err;
  });

const yelpApi = {
  search: (options) => yelp(options),
  idSearch: (id) => yelpIdSearch(id),
};

module.exports = yelpApi;
