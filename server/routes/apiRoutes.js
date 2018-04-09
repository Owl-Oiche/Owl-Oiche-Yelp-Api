const router = require('express').Router();
const yelpApi = require('../yelp_api');

router.get('/yelpResults', (req, res) => {
  return yelpApi.search(req.query)
    .then(response => res.json(response.data))
    .catch(err => res.json(err.message));
});

router.get('/yelpIdResults', (req, res) => {
  return yelpApi.search(req.query.id)
    .then(response => res.json(response.data))
    .catch(err => res.json(err.message));
});

module.exports = router;
