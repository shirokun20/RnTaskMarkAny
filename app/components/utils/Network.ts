import axios from 'axios';

const baseOptions = {
  timeout: 60000, // 1 minute for connection timeout
  timeoutErrorMessage: 'Request timed out', // Error message for timeout
};

const Network = axios.create(baseOptions);

Network.interceptors.request.use(
  (config) => {
    // Log request details
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

Network.interceptors.response.use(
  (response) => {
    // Log response details
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default Network;