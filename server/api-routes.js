let router = require('express').Router();
let methodOverride = require('method-override');

router.get('/*', function(req, res) {
  return res.status(200).json({  a: 1  });
});

module.exports = router;
