import { Grid } from "@mui/material";
import React from "react";
import DailyWeatherForecast from "../DailyWeatherForecast";
type WeatherForecastsProps = {
  forecasts: any;
};

const WeatherForecasts = ({ forecasts }: WeatherForecastsProps) => {
  return (
    <Grid className='weather-forecast' container>
      {forecasts.map((forecast: any) => (
        <Grid item key={forecast.id}>
          <DailyWeatherForecast weather={forecast}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default WeatherForecasts;
