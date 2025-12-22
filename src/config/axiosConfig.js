import axios from 'axios';

const axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URI,
});

export default axios;
