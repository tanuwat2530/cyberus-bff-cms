const axios = require('axios');

exports.forwardToBackend = async (userData) => {
  const response = await axios.post('http://localhost:8080/client-service-api/update', userData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};