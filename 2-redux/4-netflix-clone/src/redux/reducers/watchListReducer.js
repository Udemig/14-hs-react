import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  watchList: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LIST_LOADING:
      return { ...state, loading: true };

    case ACTION_TYPES.LIST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ACTION_TYPES.LIST_SUCCESS:
      return { ...state, loading: false, error: null, watchList: action.payload };

    case ACTION_TYPES.ADD_TO_LIST:
      const updated = state.watchList.concat(action.payload);

      return { ...state, watchList: updated };

    case ACTION_TYPES.REMOVE_FROM_LIST:
      const filtred = state.watchList.filter((item) => item.id !== action.payload);

      return { ...state, watchList: filtred };

    default:
      return state;
  }
};

export default listReducer;
