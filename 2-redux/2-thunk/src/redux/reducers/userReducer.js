const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOADING":
      return { ...state, isLoading: true };

    case "USERS_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "USERS_SUCCESS":
      return { ...state, isLoading: false, error: null, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
