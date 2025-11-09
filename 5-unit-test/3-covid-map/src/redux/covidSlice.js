import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./action";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetails.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });
  },
});

export default covidSlice.reducer;
