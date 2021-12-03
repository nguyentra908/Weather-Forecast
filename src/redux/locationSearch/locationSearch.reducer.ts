import { createSlice } from "@reduxjs/toolkit";
import { LocationSearchModel } from "../../models/LocationSearch.model";

const initialState = {
  locatonSearch: null as LocationSearchModel | null,
  Error: null,
  loading: false,
};
export const locationSearchSlice = createSlice({
  name: "locationSearch",
  initialState,
  reducers: {
    locatonSearchSuccess(state, action) {
      return {
        ...state,
        loading: true,
        locatonSearch: action.payload[0],
      };
    },
    locatonSearchFailed(state, action) {
      return {
        ...state,
        loading: true,
        Error: action.payload,
      };
    },
  },
});

export const locationSearchActions = locationSearchSlice.actions;
export const locationSearchReducer = locationSearchSlice.reducer;
