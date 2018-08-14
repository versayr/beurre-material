var express = require('express');
var router = express.Router();

var pastries = require('../data/pastries');

/* GET pastry listing. */
router.get('/', function(req, res, next) {
  res.json(pastries);
});

module.exports = router;
