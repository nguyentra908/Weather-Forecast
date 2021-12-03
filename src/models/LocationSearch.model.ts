export interface LocationSearchModel {
    title: string;
    location_type: string;
    latt_long: number;
    woeid: number;
    distance: number;
  }
  
  export interface APIError extends Error {
    [key: string]: any;
  }