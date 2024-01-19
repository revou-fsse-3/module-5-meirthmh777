import { FC, LiHTMLAttributes, PropsWithChildren } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
interface indexProps extends LiHTMLAttributes<HTMLLIElement> {
  to: string;
  label: string;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ to, label, ...resProps }) => {
  return (
    <li
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Link className="text-white text-3xl" href={to}>
        {label}
      </Link>
    </li>
  );
};

export default index;
