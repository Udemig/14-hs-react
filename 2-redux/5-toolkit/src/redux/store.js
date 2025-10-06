import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik birleştirir (combineReducers'a gerek yok)
 * redux thunk kurulu olarak gelir
 * devtools (geliştirici eklentisi) kurulu olarak gelir
 */

const store = configureStore({ reducer: { counterReducer, crudReducer } });

export default store;
