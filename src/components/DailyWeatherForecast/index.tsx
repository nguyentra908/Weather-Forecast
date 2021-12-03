import { Grid, Paper, Typography } from "@mui/material";
import { formatDateFocast } from "../../utils/DatetimeHelper";
import WeatherIcon from "../WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";
import WindSpeed from "../WindSpeed";

type DailyWeatherForecastProps = {
  weather: any;
};

const DailyWeatherForecast = ({ weather }: DailyWeatherForecastProps) => {
  return (
    <Paper elevation={2}>
      <Grid
        className="weather-forecast__item"
        container
        direction="column"
        spacing={4}
      >
        <Grid item>
          <Typography component="h6" variant="h6" gutterBottom>
            {formatDateFocast(weather.applicable_date)}
          </Typography>
        </Grid>
        <Grid item>
          <WeatherIcon name={weather.weather_state_abbr} />
        </Grid>
        <Grid item>
          <WeatherTemperature min={weather.min_temp} max={weather?.max_temp} />
        </Grid>
        <Grid item>
          <WindSpeed
            speed={weather.wind_speed}
            direction={weather.wind_direction_compass}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DailyWeatherForecast;
