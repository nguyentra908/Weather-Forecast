import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./redux/loading/loading.reducer";
import { locationReducer } from "./redux/location/location.reducer";
import { locationSearchReducer } from "./redux/locationSearch";

const rootReducer = {
  LocatonSearch: locationSearchReducer,
  Location: locationReducer,
  Loading: loadingReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
