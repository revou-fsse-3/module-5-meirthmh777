import { FC, HTMLAttributes, Suspense } from "react";
import FetchForecast, { GetForecastProps } from "@libs/api/GetForecast";
import FetchWeather, { GetWeatherProps } from "@libs/api/GetWeather";
import dynamic from "next/dynamic";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Button, { ButtonTypes } from "@/common/Button";

// Text content does not match server-rendered HTML. Like it is error when rendered as server side
// so it is needed to disable the SSR.
const Forecast = dynamic(() => import("@components/Forecast"), { ssr: false });
const CurrentWeather = dynamic(() => import("@components/Weather"), {
  ssr: false,
});
interface ResultProps {
  weatherResult: WeatherResult;
}

type WeatherResult = [GetWeatherProps, GetForecastProps];
async function fetchWeatherByCity(city: string): Promise<WeatherResult> {
  try {
    const Weather = await FetchWeather(city);
    const Forecast = await FetchForecast(city);

    return [Weather, Forecast];
  } catch (e) {
    throw Error("city not found");
  }
}
// getServerSideProps fetching data
export const getServerSideProps: GetServerSideProps<ResultProps> = async (
  context
) => {
  const city = context.query["city"] as string;
  try {
    const weatherResult = await fetchWeatherByCity(city || "");
    return {
      props: {
        weatherResult,
      },
    };
  } catch (error: unknown) {
    if ((error as Error).message === "city not found") {
      // Redirect to the city-not-found page if the city not found
      return {
        redirect: {
          // property
          destination: "/weather/city-not-found",
          permanent: false, // boolean
        },
      };
    } else {
      // Handle other errors
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("failed to fetch all data");
    }
  }
};
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

type WeatherResultComponents = FC<Props>;
const WeatherResult: WeatherResultComponents = ({ weatherResult }) => {
  return (
    <div className="text-center">
      <Suspense fallback={<>Loading</>}>
        <Button
          ButtonType={ButtonTypes.SecondaryButton}
          className="p-3 rounded-lg"
        >
          <Link href="/weather" className="font-bold text-xl">
            Search another city here
          </Link>
        </Button>
        <CurrentWeather data={weatherResult[0]} />
        <Forecast data={weatherResult[1]} />
      </Suspense>
    </div>
  );
};

export default WeatherResult;
