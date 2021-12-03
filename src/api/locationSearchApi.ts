import axiosClient from "./axiosClient";

const locationSearchApi = {
  async get(location:string) {
    const locationSearch = await axiosClient.get(`/search/${location}`);
    return locationSearch;
  }
};
export default locationSearchApi;
