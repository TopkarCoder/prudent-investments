import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function OtpVerify() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('loginEmail');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-otp`, { email, otp });
      if (res.data.verified) {
        localStorage.setItem('isVerified', 'true');
        alert('OTP Verified! Redirecting...');
        window.location.href = '/InvestorDashboard';
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Verification failed');
    }
  };

  return (
    <div className="otp-verify">
      <h2>Enter OTP sent to your Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="otp"
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default OtpVerify;
