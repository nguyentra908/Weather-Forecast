import axiosClient from "./axiosClient";

const locationApi = {
  async get(query:number) {
    const location = await axiosClient.get(`/${query}`);
    return location;
  }
};
export default locationApi;
