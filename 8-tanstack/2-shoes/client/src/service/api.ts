import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // temel api url
  withCredentials: true, // çerezleri backende göndermemizi sağlar
});

// axios interceptor
// api'a atılan her istekte veya api'dan gelen ger her cevapta fonksiyon çalıştırmaya yarar
api.interceptors.response.use(
  // api'dan olumlu cevap gelince çalışır
  (res) => res,
  // api'dan olumsuz cevap gelince çalışır
  async (err) => {
    // hata aldığımız api isteğini değişkene aktar
    const originalRequest = err.config;

    // hata access tokenın süresi dolmasından kaynaklıysa
    if (
      err.response.status === 401 &&
      err.response.data.message === "Access token expired"
    ) {
      try {
        // access tokenını yenile
        await authService.refresh();

        // ilk adımda hata aldığımız isteği tekrar at
        return api.request(originalRequest);
      } catch (error) {
        // refresh tokenında süresi dolduysa çıkış yap:
        await authService.logout();

        // login sayfasına yönlendir
        window.location.href = "/login";
      }
    }

    // hatayı fırlat
    return Promise.reject(err);
  }
);

export default api;
