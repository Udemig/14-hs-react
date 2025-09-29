import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import themeReducer from "./reducers/themeReducer";

// reducer'ları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// rootReducer'ı kullanarak store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export ediyoruz
export default store;
