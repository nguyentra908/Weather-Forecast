import locationSearchApi from "../../api/locationSearchApi";
import { locationSearchActions } from "./locationSearch.reducer";

export const getLocationSearch =
  (name: string) => async (dispatch: Function) => {
    try {
      const data = await locationSearchApi.get(name);
      dispatch(locationSearchActions.locatonSearchSuccess(data));
    } catch (error) {
      dispatch(locationSearchActions.locatonSearchFailed(error));
    }
  };
