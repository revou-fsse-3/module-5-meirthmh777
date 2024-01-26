import {
  GetForecastProps,
  List,
  Weather,
  Description,
  Icon,
  Sys,
  Pod,
  MainEnum,
} from "@/libs/api/GetForecast";

const forecastResult: GetForecastProps = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1706259600,
      main: {
        temp: 30.78,
        feels_like: 33.92,
        temp_min: 30.78,
        temp_max: 31.34,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 58,
        temp_kf: -0.56,
      },
      weather: [
        {
          id: 500,
          main: "Rain" as MainEnum.Rain,
          description: "light rain" as Description.LightRain,
          icon: "10d" as Icon.The10N,
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 5.02,
        deg: 321,
        gust: 5.07,
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        "3h": 0.17,
      },
      sys: {
        pod: "d" as Pod.D,
      },
      dt_txt: "2024-01-26 09:00:00",
    },
  ],
  city: {
    id: 1642911,
    name: "Jakarta",
    coord: {
      lat: -6.2146,
      lon: 106.8451,
    },
    country: "ID",
    population: 8540121,
    timezone: 25200,
    sunrise: 1706223163,
    sunset: 1706267814,
  },
};

export default forecastResult;
