const express = require('express'),
      router = express.Router(),
      neoController = require('./neos.controller');

router.get('/getNearEarthObjects', function(req, res, next) {
    res.render('index', { title: neoController.getNeos() });
});

module.exports = router;
