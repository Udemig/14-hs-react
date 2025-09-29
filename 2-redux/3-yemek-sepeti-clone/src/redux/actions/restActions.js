import ACTION_TYPES from "./actionTypes";
import api from "../../api";

// asenkron thunk aksiyonu
export const getRestaurants = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.REST_LOADING });

  api
    .get("/restaurants")
    .then((res) => dispatch({ type: ACTION_TYPES.REST_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ACTION_TYPES.REST_ERROR, payload: err.message }));
};
