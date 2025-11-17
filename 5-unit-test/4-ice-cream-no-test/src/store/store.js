import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket-slice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
