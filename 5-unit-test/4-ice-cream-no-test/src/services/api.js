import axios from "axios";
import { toast } from "react-toastify";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    const errorMessage =
      error.response?.data?.message || error.message || "Bir hata oluştu";

    // Show error toast notification
    toast.error(errorMessage);

    return Promise.reject(error);
  }
);

export default api;
