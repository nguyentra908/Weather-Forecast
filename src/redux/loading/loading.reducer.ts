import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: 0,
  reducers: {
    startLoading(state) {
      return state+1;
    },
    endLoading(state) {
      return state-1;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;

