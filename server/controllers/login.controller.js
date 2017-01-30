(function() {
  const passport = require('passport');
  const jwt = require('express-jwt');

  function init(router) {
    router.put('/login', login);
    router.post('/login', register);
  }

  function login(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Please fill out all fields' });
    }
    passport.authenticate('local', 
      { failureRedirect: '/login' },
      (req, res) => {
        // if username and password correct 
        res.redirect('/');
      }
    );
  }

  function register(req, res) {
    passport.authenticate('local',
      { failureRedirect: '/login' },
      (req, res) => {
        // if username and password correct 
        res.redirect('/');
      }
    );
  }

  module.exports = init;
}());
