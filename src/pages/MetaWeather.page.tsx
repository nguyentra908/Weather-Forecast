import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import WeatherForecasts from "../components/WeatherForecasts";
import WeatherWidget from "../components/WeatherWidget";
import { withLoading } from "../hoc/withLoading";
import { locationSelectors } from "../redux/location";

function MetaWeather() {
  const data = useSelector(locationSelectors.getLocation);
  const locationCity = data.location;

  return (
    <Box data-testid="CityWeather">
      {!!data.location && (
        <>
          <WeatherWidget
            title={locationCity.title}
            time={locationCity.time}
            weather={locationCity.consolidated_weather[0]}
          />
          <WeatherForecasts
            forecasts={locationCity.consolidated_weather.slice(1)}
          />
        </>
      )}
    </Box>
  );
}

export default withLoading(MetaWeather);
