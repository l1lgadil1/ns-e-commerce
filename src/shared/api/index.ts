import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT, // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    if (error.response?.status === 401 && !originalRequest._retry) {
      // originalRequest._retry = true;
      localStorage.removeItem('token');
      if (typeof window !== "undefined" && typeof window !== "undefined") {
        window.location.href = '/auth';
      }
      // try {
      // const refreshToken = localStorage.getItem('refreshToken');
      // const response = await axios.post('https://api.example.com/refresh-token', { refreshToken });
      // const { token } = response.data;
      // localStorage.setItem('token', token);
      // api.defaults.headers['Authorization'] = `Bearer ${token}`;
      // return api(originalRequest);
      // localStorage.removeItem('token');
      // localStorage.removeItem('refreshToken');
      // } catch (refreshError) {
      // Handle refresh token failure (e.g., logout user)
      // localStorage.removeItem('token');
      // localStorage.removeItem('refreshToken');
      // Redirect to login page or dispatch a logout action
      // return Promise.reject(refreshError);
      // }
    }
    return Promise.reject(error);
  }
);
