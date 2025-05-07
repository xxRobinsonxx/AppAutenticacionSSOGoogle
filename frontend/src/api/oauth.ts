// src/api/oauth.ts
import axios from 'axios';

const API_BASE = process.env.REACT_APP_AUTH_API!;
const api = axios.create({ baseURL: API_BASE });

// Añade el token en cada petición
api.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt');
  if (token) config.headers!['Authorization'] = `Bearer ${token}`;
  return config;
});

export const googleLogin = () => {
  window.location.href = `${API_BASE}/google`;
};


// export const getProfile = () => api.get<{ userId: string; email: string }>('/me');
// src/api/oauth.ts
export const getProfile = () => api.get<{ id: string; email: string; displayName: string }>('/me');

