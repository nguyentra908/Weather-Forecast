import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://meta-weather-server.herokuapp.com/api/location",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(
  function (config:any) {
    return config;
  },
  function (error:string) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
