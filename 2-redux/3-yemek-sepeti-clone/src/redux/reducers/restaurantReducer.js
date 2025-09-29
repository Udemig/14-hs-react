import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REST_LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.REST_SUCCESS:
      return { ...state, isLoading: false, error: null, restaurants: action.payload };

    default:
      return state;
  }
};

export default restaurantReducer;
