// ------ 404 page not found appears when users search the wrong page ----------

import Button, { ButtonTypes } from "@/common/Button";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="text-center">
      <p className="text-3xl">404</p>
      <p className="text-xl">This page cannot be found</p>
      <Button ButtonType={ButtonTypes.FiveButton} className="rounded-lg">
        <Link href="/" className="font-bold text-lg">
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
