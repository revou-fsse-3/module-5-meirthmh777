import { FC, HTMLAttributes, useEffect, useState } from "react";

interface indexProps extends HTMLAttributes<HTMLSpanElement> {
  timezone: number;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ timezone, ...resProps }) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      {...resProps}
      className={`${
        resProps.className ? resProps.className : "text-3xl font-bold"
      }`}
    >
      {currentTime}
    </span>
  );
};

export default index;
function getFormattedTime(timezone = 0) {
  const date = new Date();
  // console.log(date.toLocaleDateString());
  console.log(timezone);
  const unixTimezoneOffset = timezone;
  date.setUTCSeconds(date.getUTCSeconds() + unixTimezoneOffset);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}
