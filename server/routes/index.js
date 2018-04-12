const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

router.get('/', (req, res) => {
  res.send(`This is a small server intended for use by the mobile app, Owl Oiche,
  located here:
  https://github.com/Owl-Oiche/Owl-Oiche
  This server contains two endpoints, /api/yelpResults, and /api/yelpIdResults.
  For more information on how to use these endpoints, please visit the README here:
  https://github.com/pkallas/Owl-Oiche-Yelp-Api`);
});

router.use('/api', apiRoutes);

module.exports = router;
