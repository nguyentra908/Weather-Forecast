import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    location: null,
    Error: null,
    loading: false,
};
export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locatonSuccess(state, action) {
      return {
        ...state,
        loading: true,
        location: action.payload,
      };
       
    },
    locatonFailed(state, action) {
      return {
        ...state,
        loading: true,
        Error: action.payload
      };
    },
    
  }
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
