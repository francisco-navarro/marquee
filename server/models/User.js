const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  pwd: String,
  lastLogin: Date
});

mongoose.model('User', schema);
