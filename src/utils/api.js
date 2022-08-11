import axios from 'axios';
import AuthService from '../services/authService';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  'Content-Type': 'application/json',
});

api.interceptors.request.use(async (config) => {
  const token = AuthService._token();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
