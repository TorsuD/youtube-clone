import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md/index.esm";
import shorts from "../assets/images/shorts.png";
import { GoHistory, GoVideo } from "react-icons/go";
import { IoMdTime } from "react-icons/io/index.esm";
import { HiOutlineScissors } from "react-icons/hi/index.esm";
import { FiChevronDown } from "react-icons/fi";

export const firstSection = [
  {
    title: "Shorts",
    icon: <img src={shorts} alt="Shorts" style={{ height: "20px" }} />,
    marginLeft: "7px",
  },
  {
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions color={"white"} size={20} />,
  },
];

export const secondSection = [
  {
    title: "Library",
    icon: <MdOutlineVideoLibrary color={"white"} size={20} />,
  },
  {
    title: "History",
    icon: <GoHistory color={"white"} size={20} />,
  },
  {
    title: "Your videos",
    icon: <GoVideo color={"white"} size={20} />,
  },
  {
    title: "Watch later",
    icon: <IoMdTime color={"white"} size={20} />,
  },
  {
    title: "Your clips",
    icon: <HiOutlineScissors color={"white"} size={20} />,
  },
  {
    title: "Show more",
    icon: <FiChevronDown color={"white"} size={20} />,
  },
];
