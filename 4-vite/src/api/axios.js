import axios from "axios";

// ayarlarını bizim belirlediğimiz bir axios kopyası oluştur
const api = axios.create({
  baseURL: "http://localhost:4000", // temel adres
  headers: { Authorization: "api-key" }, // header
  timeout: 3000, // zaman aşımı süresi
});

export default api;
