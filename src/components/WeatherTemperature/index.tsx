import { Typography } from "@mui/material";
type WeatherTemperatureProps = {
  min: Number;
  max: Number;
};
const WeatherTemperature = ({ min, max }: WeatherTemperatureProps) => (
  <>
    <Typography variant="caption">
      <span>Min: {min.toFixed(0)}°C</span>
      <br />
      <span>Max: {max.toFixed(0)}°C</span>
    </Typography>
  </>
);

export default WeatherTemperature;
