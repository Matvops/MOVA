import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
    'X-Correlation-ID': crypto.randomUUID()
  },
  timeout: 10000,
});
