const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String
});

mongoose.model('Profile', schema);
