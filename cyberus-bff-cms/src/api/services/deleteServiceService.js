const axios = require('axios');

exports.forwardToBackend = async (userData) => {
  const response = await axios.post('http://localhost:8081/client-service-api/delete', userData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};