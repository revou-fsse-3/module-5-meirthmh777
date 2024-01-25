// ------ Error city not found page appears when users search unreachable city's weather data ----------
import Link from "next/link";
import Button, { ButtonTypes } from "@/common/Button";
const CityNotFound = () => {
  return (
    <div className="text-center">
      <p className="text-3xl">Error</p>
      <p className="text-xl">City Not Found</p>
      <Button ButtonType={ButtonTypes.FiveButton} role="button">
        <Link href="/weather">Search another city</Link>
      </Button>
    </div>
  );
};

export default CityNotFound;
