/*
 * Hem reducer'ı hem aksiyon oluşturan fonksiyon'ları hem aksiyon tiplerini tek noktada oluşturmamızı sağlar

 * Nasıl slice oluştururuz?
 * import createSlice from ".."
 * name: slice ismi > string
 * intialState: başlangıç state'i > object
 * reducers: aksiyonları ve görevlerini tanımladığımız fonksiyonlar
  
 ! Not: Reducers içerisinde yazılan fonksiyonlarda klasik redux'tan farklı olarak state'i doğrudan güncelleyebiliyoruz
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// component içerisinde dispatch ediceğimiz aksiyonları oluşturucak fonksiyonları slice yapısı bize otomatik olarak oluşturdu
// aksiyon tiplerini ise otomatik olarak belirledi
export const { increase, decrease, setCount } = counterSlice.actions;

// store'a tanıtılması gereken reducer'ı otamatik olarak oluşturur
export default counterSlice.reducer;
