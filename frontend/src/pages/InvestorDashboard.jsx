function InvestorDashboard() {

const handleLogout = () => {
  localStorage.removeItem('isVerified'); // clear verification flag
  localStorage.removeItem('loginEmail'); // optional: clear email too
  window.location.href = '/login'; // or use navigate('/login')
};

  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Investor Dashboard</h1>
      <p>This content is only for verified investors.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  );
}

export default InvestorDashboard;
