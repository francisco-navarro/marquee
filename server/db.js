const mongoose = require('mongoose');
const config = require('../config/db');

const entities = ['profile', 'user'];

// Set promises to q
mongoose.Promise = require('q').Promise;

// require('./models/Users');
// let db = {
	// Warehouse : mongoose.model('Warehouse'),
  // Warehouse : mongoose.model('Warehouse'),
  // Warehouse : mongoose.model('Warehouse'),
  // Warehouse : mongoose.model('Warehouse')
// };

const db = entities.recduce((acc, entity) => {
  acc[entity] = mongoose.model(require(`./models/${entity}`));
  return acc;
}, {});

console.log('Connection to mongodb://' + config.url);
mongoose.connect('mongodb://' + connection_string);

module.exports = db;
