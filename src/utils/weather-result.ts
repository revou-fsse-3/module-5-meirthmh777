import { GetWeatherProps } from "@/libs/api/GetWeather";

const weatherResult: GetWeatherProps = {
  coord: {
    lon: 106.8451,
    lat: -6.2146,
  },
  rain: {
    "1h": 10,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 31.08,
    feels_like: 36.63,
    temp_min: 30.5,
    temp_max: 32.51,
    pressure: 1010,
    humidity: 66,
  },
  visibility: 6000,
  wind: {
    speed: 3.09,
    deg: 300,
  },
  clouds: {
    all: 40,
  },
  dt: 1706260656,
  sys: {
    type: 1,
    id: 9383,
    country: "ID",
    sunrise: 1706223163,
    sunset: 1706267814,
  },
  timezone: 25200,
  id: 1642911,
  name: "Jakarta",
  cod: 200,
};

export default weatherResult;
