import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setJobs: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = action.payload;
    },
    deleteJob: (state, action) => {
      const index = state.jobs.findIndex((i) => i.id === action.payload);
      state.jobs.splice(index, 1);
    },
  },
});

export const { setError, setLoading, setJobs, deleteJob } = jobSlice.actions;

export default jobSlice.reducer;
