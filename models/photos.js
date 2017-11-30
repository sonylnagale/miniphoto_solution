const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  url: { type: String, require: true },
  submitted_by: String
});

module.exports = mongoose.model('Photo', photoSchema);