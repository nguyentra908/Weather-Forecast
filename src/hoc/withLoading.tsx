import { useSelector } from "react-redux";
import React from "react";
import Loading from "../components/Loading";
import * as LoadingSelector from "./../redux/loading/loading.selectors";

export const withLoading = (Component: any) => (props: any) => {
  const isLoading = useSelector(LoadingSelector.getLoading);
  return (
    <div>
      {isLoading > 0 && <Loading />}
      <Component {...props} />
    </div>
  );
};
