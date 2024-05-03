import { IoBarbell } from "react-icons/io5";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IconType } from "react-icons/lib";

export const links = [
  {
    path: "/home",
    title: "Home",
    icon: FaHome,
  },
  {
    path: "/test",
    title: "Workout",
    icon: IoBarbell,
  },
  {
    path: "/test",
    title: "Recipes",
    icon: FaClipboardList,
  },
  {
    path: "/test",
    title: "Explore",
    icon: MdExplore,
  },
] as const;

export type link = {
  path: string;
  title: string;
  icon: IconType;
};
