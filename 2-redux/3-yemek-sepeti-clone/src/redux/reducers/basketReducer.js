const initialState = {
  isLoading: true,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default basketReducer;
