import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/job-slice";

const store = configureStore({ reducer: { jobReducer } });

export default store;
