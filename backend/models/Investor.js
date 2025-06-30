const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  }
});

module.exports = mongoose.model('Investor', investorSchema, 'Investors');
