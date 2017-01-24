// Entry point to express
const express = require('express');
const app = express();
const winston = require('winston');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const proxy = require('express-http-proxy');
const API = require('./api-routes');

const db = require('../config/db');

mongoose.connect(db.url);

const angularCliPort = 4200;
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(morgan('tiny', {
  skip: (req, res) =>
      res.statusCode === 200 || !req.url.match('/aso/')
}));

// Send api/* to the backend
app.use('/api', API);

// Send the other request to angular cli
app.use('/', proxy('localhost', {
  forwardPath: (req) => require('url').parse(req.url).path,
  port: angularCliPort
}));


app.listen(port, () =>
  winston.info('Magic happens on port ' + port)
);
