function getFormattedTime(timezone = 0) {
  const date = new Date();
  const unixTimezoneOffset = timezone;
  date.setUTCSeconds(date.getUTCSeconds() + unixTimezoneOffset);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}
export default function useGetFormattedTime() {
  return getFormattedTime;
}
