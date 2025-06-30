const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendOTP(email, otp) {
  try {
    const data = await resend.emails.send({
      from: 'Prudent OTP <onboarding@resend.dev>', // Safe for testing
      to: email,
      subject: 'Your OTP Code',
      html: `<p>Your One Time Password is <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
    });
    console.log('✅ Email status:', data);
    console.log('✅ OTP Email sent to', email);
    return data;
  } catch (error) {
    console.error('❌ Error sending OTP email:', error);
    throw error;
  }
}

module.exports = sendOTP;


