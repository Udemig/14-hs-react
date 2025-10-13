import { configureStore } from "@reduxjs/toolkit";
import updatedReducer from "./slices/updatedSlice";
import classicReducer from "./slices/classicSlice";

const store = configureStore({
  reducer: { classicReducer, updatedReducer },
});

export default store;
