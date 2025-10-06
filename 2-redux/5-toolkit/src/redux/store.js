import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik birleştirir (combineReducers'a gerek yok)
 * redux thunk kurulu olarak gelir
 * devtools (geliştirici eklentisi) kurulu olarak gelir
 */

const store = configureStore({ reducer: { counterReducer } });

export default store;
