//Entry point to express
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var proxy = require('express-http-proxy');
var API = require('./api-routes');

var db = require('../config/db');

mongoose.connect(db.url);

var angularCliPort = 4200;
var port = process.env.PORT || 3001;

app.use(bodyParser.json());
//Send api/* to the backend
app.use('/api', API);

//Send the other request to angular cli
app.use('/', proxy('localhost', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  },
  port: angularCliPort
}));


app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});