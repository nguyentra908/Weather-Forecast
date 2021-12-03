import locationApi from "../../api/locationApi";
import { useLoading } from "../loading/loading.action";
import { locationActions } from "./location.reducer";

export const getLocation = (name: number) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLoading(async (dispatch: Function) => {
    try {
      const data = await locationApi.get(name);
      dispatch(locationActions.locatonSuccess(data));
    } catch (error) {
      dispatch(locationActions.locatonFailed(error));
    }
  });
