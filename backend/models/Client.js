//Client schema stored in Mongodb (Prudent Investments) as per the requirements.

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  pan: String,
  dob: String,
  email: String,
  phone: String,
  bankName: String,
  branchName: String,
  bankAccountLast4: String,
  kycStatus: String,
  nominee: String,
  dateUpdated: String,
});

module.exports = mongoose.model('Client', clientSchema, 'Client data');