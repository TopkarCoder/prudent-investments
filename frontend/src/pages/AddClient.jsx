import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // ✅ fixed import

function AddClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    pan: '',
    dob: '',
    email: '',
    phone: '',
    bankName: '',
    branchName: '',
    bankAccountLast4: '',
    kycStatus: '',
    nominee: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkToken = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('adminToken');
        return false;
      }
      return true;
    } catch {
      localStorage.removeItem('adminToken');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkToken()) {
      alert('Session expired. Please log in again.');
      return navigate('/admin-login');
    }

    const clientData = {
      ...form,
      dateUpdated: new Date().toISOString().slice(0, 10) // optional if backend also sets this
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/add-client`, clientData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      setMessage(res.data.message);
      setForm({
        name: '',
        pan: '',
        dob: '',
        email: '',
        phone: '',
        bankName: '',
        branchName: '',
        bankAccountLast4: '',
        kycStatus: '',
        nominee: ''
      });
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
      } else {
        setMessage('Error adding client');
      }
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="pan" placeholder="PAN" value={form.pan} onChange={handleChange} required />
        <input name="dob" placeholder="DOB (YYYY-MM-DD)" value={form.dob} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <input name="bankName" placeholder="Bank Name" value={form.bankName} onChange={handleChange} required />
        <input name="branchName" placeholder="Branch Name" value={form.branchName} onChange={handleChange} required />
        <input name="bankAccountLast4" placeholder="Last 4 digits of A/C" value={form.bankAccountLast4} onChange={handleChange} required />
        <input name="kycStatus" placeholder="KYC Status" value={form.kycStatus} onChange={handleChange} required />
        <input name="nominee" placeholder="Nominee Name" value={form.nominee} onChange={handleChange} />

        <button type="submit" style={{ marginTop: '1rem' }}>Add Client</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

export default AddClient;
