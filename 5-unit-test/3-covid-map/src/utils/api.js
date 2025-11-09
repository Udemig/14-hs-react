import axios from "axios";

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_TOTAL_API_KEY,
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});
