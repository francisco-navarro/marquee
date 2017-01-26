const mongoose = require('mongoose');
const config = require('../config/db');

const entities = ['Profile', 'User'];
// Set promises to q
mongoose.Promise = require('q').Promise;

const db = entities.reduce((acc, entity) => {
  require(`./models/${entity}`);
  acc[entity] = mongoose.model(entity);
  return acc;
}, {});

mongoose.connect(config.url).then(() =>
  console.log('Connected to ' + config.url));

module.exports = db;
