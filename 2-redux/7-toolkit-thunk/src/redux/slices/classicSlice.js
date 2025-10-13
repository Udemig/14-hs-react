import { createSlice } from "@reduxjs/toolkit";

const classicSlice = createSlice({
  name: "classic",
  initialState: { isLoading: true, error: null, data: null },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = classicSlice.actions;

export default classicSlice.reducer;
