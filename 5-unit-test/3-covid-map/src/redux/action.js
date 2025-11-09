import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk("covid/getDetails", async (country) => {
  // ülkenin covid verilerini alıcak isteği hazırla
  const req1 = detailApi.get("statistics", { params: { country } });

  // ülkenin detay verilerini alıcak isteği hazırla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

  // Promise.all: api isteklerini paralell olarak atar
  // sırayla attığımızdaki zaman kaybını önlemek için api isteklerini aynı anda atıyoruz
  const [res1, res2] = await Promise.all([req1, req2]);

  // api'dan gelen verileri değişkene aktar
  const covidData = res1.data.response[0];
  const countryData = res2.data[0];

  // ihtiycaımız olan verileri al
  const payload = {
    day: covidData?.day,
    cases: covidData?.cases?.total,
    deaths: covidData?.deaths?.total,
    tests: covidData?.tests?.total,
    country: countryData?.name?.common,
    continent: countryData?.region,
    population: countryData?.population,
    capital: countryData?.capital[0],
    flag: countryData?.flags,
    currency: Object.entries(countryData?.currencies)?.[0]?.[1]?.name,
  };

  // aksiyonun payload'ını return et
  return payload;
});
