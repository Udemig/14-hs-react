import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice";

const store = configureStore({ reducer: covidReducer });

export default store;
