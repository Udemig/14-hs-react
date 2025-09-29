import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./reducers/basketReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ basket: basketReducer, restaurant: restaurantReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
