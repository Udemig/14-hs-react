import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

// API isteği atan fonksiyonları bir arada tanımlayalım
const coinApi = {
  // top coinleri getir
  async getTopCoins() {
    const res = await api.get("/coins/markets?vs_currency=usd");

    return res.data;
  },

  // coin detay verisini getir
  async getCoinDetails(id) {
    const res = await api.get(`/coins/${id}`);

    return res.data;
  },

  // fiyat geçmişini getir
  async getPriceHistory(id, days) {
    const res = await api.get(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: days,
      },
    });

    return res.data.prices.map(([timestamp, price]) => ({
      price,
      timestamp,
      date: new Date(timestamp).toISOString(),
    }));
  },
};

export default coinApi;
