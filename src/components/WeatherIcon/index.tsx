import React from "react";
import { getWeatherIcon } from "../../utils/WeatherIcon";

type WeatherIconProps = {
  name: string;
};
const WeatherIcon = ({ name }: WeatherIconProps) => (
  <img width={196} height={96} alt="weather icon" src={getWeatherIcon(name)} />
);

export default WeatherIcon;
