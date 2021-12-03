const baseImageUrl =
  "https://www.metaweather.com/static/img/weather/{abbr}.svg";
export const getWeatherIcon = (name: string) =>
  baseImageUrl.replace("{abbr}", name);