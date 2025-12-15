import { configureStore, combineReducers } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer'ları birleştir
const rootReducer = combineReducers({ note: noteReducer });

// persist için ayar nesnesi
const persistConfig = {
  key: "store",
  storage,
  whiteList: ["note"],
};

// persist reducer'ı oluştur
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // bu aksiyonları görmezden gel
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// store'u export et
export default store;

// persist store'u export et
export const persistor = persistStore(store);
