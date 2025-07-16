const axios = require('axios');

exports.forwardToBackend = async (userData) => {
  const response = await axios.post('http://localhost:8081/admin-report/all-shortcode', userData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};

