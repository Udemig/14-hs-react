import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import store from "../redux/store";

// rootState tipi tanımla (store'un tipi > useSelector'de kullanılacak)
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// appDispatch tipi tanımla (useDispatch'de kullanılacak)
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
