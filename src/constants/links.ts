import { IoBarbell } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";

import { MdExplore } from "react-icons/md";
import { IconType } from "react-icons/lib";

export const links = [
  {
    path: "/home",
    title: "Home",
    icon: FaHome,
  },
  {
    path: "/workout",
    title: "Workout",
    icon: IoBarbell,
  },
  {
    path: "/create",
    title: "Create",
    icon: FaSquarePlus,
  },
  {
    path: "/explore",
    title: "Explore",
    icon: MdExplore,
  },
] as const;

export type link = {
  path: string;
  title: string;
  icon: IconType;
};
