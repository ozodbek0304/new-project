import { API_KEYS } from "@/constants/keys";
import axios from "axios";

const baseURL = import.meta.env.VITE_DEFAULT_URL;

export const api = axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
      const storedToken = localStorage.getItem(API_KEYS.TOKEN);
      if (storedToken) {
          const token = JSON.parse(storedToken);
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if ([401, 403].includes(err.response?.status)) {
      localStorage.removeItem(API_KEYS.TOKEN);
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
