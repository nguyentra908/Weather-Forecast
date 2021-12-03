import { loadingActions } from "./loading.reducer";

export const useLoading =
  (asyncAction: (dispatch: any) => Promise<unknown> | void) =>
  async (dispatch: any) => {
    try {
      dispatch(loadingActions.startLoading());
      return await asyncAction(dispatch);
    } finally {
      dispatch(loadingActions.endLoading());
    }
  };
