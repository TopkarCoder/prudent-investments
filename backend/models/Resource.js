const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: { type: String, enum: ['video', 'document'], required: true },
  link: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);