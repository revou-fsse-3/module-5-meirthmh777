import { FC, HTMLAttributes, useEffect, useState } from "react";
import useGetFormattedTime from "./getFormatedTime";
interface ClockProps extends HTMLAttributes<HTMLSpanElement> {
  timezone: number;
}
type ClockComponents = FC<ClockProps>;
const Clock: ClockComponents = ({ timezone, ...resProps }) => {
  const getFormattedTime = useGetFormattedTime();
  const [currentTime, setCurrentTime] = useState("init text");
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
      role="main"
    >
      {currentTime}
    </span>
  );
};

export default Clock;
