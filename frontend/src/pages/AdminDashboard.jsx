import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/search-clients`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        params: { query },
      });
      setResults(res.data);
    } catch {
      alert('Unauthorized or Error. Redirecting to login.');
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

    const updateDate = async (id, newDate, idx) => {
      try {
        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/admin/client-date/${id}`, {
          dateUpdated: newDate,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });

        alert('Date updated successfully');
      } catch {
        alert('Update failed');
      }
    };


  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2><b>Admin Dashboard</b></h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by PAN or Name"
          style={{ padding: '0.5rem', width: '300px', fontFamily: 'sans-serif' , fontSize: 'larger'}}
        />
        <button onClick={handleSearch} style={{ marginLeft: '1rem', padding: '10px', fontSize: 'large' }}>
          Search
        </button>
       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Link to="/admin/add-client">
          <button style={{ marginTop: '1rem', padding: '10px', fontSize: 'large' }}>Add New Client</button>
        </Link>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        <button onClick={logout} style={{ marginLeft: '1rem', color: 'red' , padding: '10px', fontSize: 'large' }}>
          Logout
        </button>
      </div>

      {results.map((inv, idx) => (
        <div
          key={inv._id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
          }}
        >
          <p><strong>Name:</strong> {inv.name}</p>
          <p><strong>PAN:</strong> {inv.pan}</p>
          <p><strong>DOB:</strong> {inv.dob}</p>
          <p><strong>Email:</strong> {inv.email}</p>
          <p><strong>Phone:</strong> {inv.phone}</p>
          <p><strong>Bank Name:</strong> {inv.bankName}</p>
          <p><strong>Account (Last 4 digits):</strong> {inv.bankAccountLast4}</p>
          <p><strong>KYC:</strong> {inv.kycStatus}</p>
          <p><strong>Nominee:</strong> {inv.nominee}</p>

          <p>
            <strong>Date Updated:</strong>{' '}
            <input
              type="date"
              value={inv.dateUpdated?.slice(0, 10) || ''}
              onChange={(e) => {
                const updated = [...results];
                updated[idx].dateUpdated = e.target.value;
                setResults(updated);
              }}
            />
          </p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
