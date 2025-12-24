import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // temel api url
  withCredentials: true, // çerezleri backende göndermemizi sağlar
});

export default api;
