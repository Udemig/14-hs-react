import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api'dan türkiye üzerindeki uçuş veirlierini al
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen veriyi formatla
  // dizi içerisindeki dizileri nesnelere çevirelim
  // [[],[],[],[]]  ===> [{},{},{}]
  const formatted = res.data.aircraft.map((i) => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    direction: i[4],
    altitude: i[5],
    speed: i[6],
  }));

  // aksiyonun payload'ını return edelim
  return formatted;
});

export const getDetails = createAsyncThunk(
  "flight/getDetails",
  async (flight) => {
    // api isteği at
    const res = await api.get("/flights/detail", { params: { flight } });

    // aksiyonun payload'ını belirlie
    return res.data;
  }
);
