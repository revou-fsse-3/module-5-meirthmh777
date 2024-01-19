import { FC, HTMLAttributes } from "react";
import { GetWeatherProps } from "../../libs/api/GetWeather";
// import Clock from "@components/Clock";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@components/Clock"), { ssr: false });
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetWeatherProps;
}
type indexComponents = FC<indexProps>;

const index: indexComponents = ({ data, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`flex items-center justify-center${
        resProps.className ? resProps.className : ""
      }`}
    >
      <div className="flex justify-center bg-slate-700 text-white m-5 p-7 gap- rounded-lg  lg:w-6/12">
        <div className="flex-[1] text-center">
          <div>
            <p className="text-3xl font-bold">{data.name}</p>
            <p className="text-3xl">{Math.round(data.main.temp)}°C</p>
            <p className="text-xl">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="h-32 w-32 mx-auto"
            src={`/icons/${data.weather[0].icon}.png`}
          />
          <Clock timezone={data.timezone} />
        </div>
        <div className="lg:pt-10 text-lg lg:text-2xl flex-[2] flex flex-col gap-8 lg:px-8 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="">Feels like :</p>
            <p className="">{Math.round(data.main.feels_like)}°C</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="">Wind :</p>
            <p className="">{data.wind.speed} m/s</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="">Humidity :</p>
            <p className="">{data.main.humidity}%</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="">Pressure :</p>
            <p className="">{data.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
