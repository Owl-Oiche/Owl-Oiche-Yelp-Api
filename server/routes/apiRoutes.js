const router = require('express').Router();
const yelpApi = require('../yelp_api');
const axios = require('axios');
require('dotenv').config();

const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY;

router.get('/yelpResults', (req, res) => {
  return yelpApi.search(req.query)
    .then(response => res.json(response.data))
    .catch(err => res.json(err.message));
});

router.get('/yelpIdResults', (req, res) => {
  return yelpApi.idSearch(req.query.id)
    .then(response => res.json(response.data))
    .catch(err => res.json(err.message));
});

router.get('/googleMaps', (req, res) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${GOOGLE_MAPS_KEY}`)
    .then(response => response.data)
    .then(data => res.json(data.results[0].formatted_address))
    .catch(err => res.json(err.message));
});

module.exports = router;
