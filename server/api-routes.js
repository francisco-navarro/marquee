'use strict';
var router = require('express').Router();
var methodOverride = require('method-override');

router.get('/*', function(req, res, next) {
  return res.status(200).json({a: 1});
});

module.exports = router;