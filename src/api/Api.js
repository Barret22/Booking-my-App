
import axios from '../api/Api.js';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export default api;

