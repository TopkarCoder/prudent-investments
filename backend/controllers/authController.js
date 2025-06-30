const Investor = require('../models/Investor');
const sendOTP = require('../utils/sendEmail');

let otpStore = {}; // In-memory for now

exports.login = async (req, res) => {
  const { email } = req.body;
  const cleanedEmail = email.trim().toLowerCase();

  console.log("🔍 Cleaned Email:", cleanedEmail);

  const investor = await Investor.findOne({ email: cleanedEmail });

  if (!investor) {
    return res.status(401).json({ message: 'Email not authorized' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[cleanedEmail] = otp;

  await sendOTP(cleanedEmail, otp);

  res.json({ message: 'OTP sent to email', email: cleanedEmail });
};

exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  const cleanedEmail = email.trim().toLowerCase();

  console.log("otpStore contents:", otpStore);
  if (otpStore[cleanedEmail] && String(otpStore[cleanedEmail]) === String(otp))
  {
    delete otpStore[cleanedEmail];
    return res.json({ verified: true, message: 'OTP verified' });
  }

  res.status(400).json({ verified: false, message: 'Invalid OTP' });
};
