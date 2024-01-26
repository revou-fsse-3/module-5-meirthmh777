import { FC, HTMLAttributes } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  //   AccordionItemState,
} from "react-accessible-accordion";

import { GetForecastProps } from "../../libs/api/GetForecast";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetForecastProps;
}

type indexComponents = FC<indexProps>;
const index: indexComponents = ({ data }) => {
  const dayInAWeek = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <h3 className="text-3xl font-bold text-white my-10 text-center">Daily</h3>
      <Accordion
        allowZeroExpanded
        className="bg-transparent gap-5"
        role="accordion"
      >
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="bg-white m-2 p-3 rounded-xl bg-opacity-70 hover:bg-opacity-100">
                <div className="flex items-center flex-row gap-5 justify-between">
                  <div className="flex gap-3 items-center">
                    <img
                      src={`/icons/${item.weather[0].icon}.png`}
                      className="w-12 h-12"
                      alt="weather"
                    />
                    <p className="font-bold text-xl text-black">
                      {forecastDays[idx]}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center ">
                    <p className="text-xl">{item.weather[0].description}</p>
                    <p className="min-max text-xl">
                      {Math.round(item.main.temp_max)}°C /
                      {Math.round(item.main.temp_min)}°C
                    </p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mx-4">
              <div className="text-white text-xl text-left table w-full bg-gray-700 bg-opacity-70 rounded-lg px-8 py-4">
                <div className="w-7/12">
                  <span className="flex justify-between">
                    <p className="">Pressure:</p>
                    <p className="">{item.main.pressure}</p>
                  </span>
                  <span className="flex justify-between">
                    <p className="">Humidity:</p>
                    <p className="">{item.main.humidity}</p>
                  </span>
                  <span className="flex justify-between">
                    <p className="">Clouds:</p>
                    <p className="">{item.clouds.all}%</p>
                  </span>
                  <span className="flex justify-between">
                    <p className="">Wind speed:</p>
                    <p className="">{item.wind.speed} m/s</p>
                  </span>
                  <span className="flex justify-between">
                    <p className="">Sea level:</p>
                    <p className="">{item.main.sea_level} m</p>
                  </span>
                  <span className="flex justify-between">
                    <p className="">Feels like:</p>
                    <p className="">{item.main.feels_like}°C</p>
                  </span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default index;
