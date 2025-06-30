export const handleAdminAuthError = (error, navigate) => {
  if (error.response?.status === 401 || error.response?.status === 403) {
    alert('Session expired or invalid token. Please log in again.');
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
    return true;
  }
  return false;
};
