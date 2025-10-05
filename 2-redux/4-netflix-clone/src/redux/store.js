import { thunk } from "redux-thunk";
import watchListReducer from "./reducers/watchListReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  watchList: watchListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
