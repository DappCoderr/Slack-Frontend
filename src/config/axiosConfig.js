import axios from 'axios';

const apis = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URI,
});

export default apis;
