const ensureAuthorized = require('./ensureAuthorized');
let router = require('express').Router();

router.get('/*', ensureAuthorized, function(req, res) {
  return res.status(200).json({  a: 1  });
});

module.exports = router;