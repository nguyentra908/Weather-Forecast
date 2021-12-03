import { Grid, Typography, Box } from "@mui/material";
import { formatDate } from "../../utils/DatetimeHelper";
import WeatherIcon from "../WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";
import WindSpeed from "../WindSpeed";

type WeatherWidgetProps={
    weather:any,
    title:string,
    time:string
}

const WeatherWidget = ({weather,title,time}:WeatherWidgetProps) => {
  return (
    <Grid>
      <Grid item sm xs={12} md="auto">
        <Grid container direction="column" alignItems="center">
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {formatDate(time)}
            </Typography>
            <Grid container direction="column" alignItems="center">
          <WeatherIcon
            name={weather.weather_state_abbr}
          />
          <Typography>{weather.weather_state_name}</Typography>
          <WeatherTemperature max={weather.max_temp} min={weather.min_temp} />
          <WindSpeed
            speed={weather.wind_speed}
            direction={weather.wind_direction_compass}
          />
        </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};


export default WeatherWidget;

