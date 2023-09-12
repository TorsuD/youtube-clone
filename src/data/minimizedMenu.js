import { GoHomeFill } from "react-icons/go";
import shorts from "../assets/images/shorts.png";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md/index.esm";

export const minimizedMenu = [
  {
    title: "Home",
    icon: <GoHomeFill color={"white"} size={25} />,
  },
  {
    title: "Shorts",
    icon: <img src={shorts} alt="Shorts" style={{ height: "20px" }} />,
  },
  {
    title: "Subsciptions",
    icon: <MdOutlineSubscriptions color={"white"} size={25} />,
  },
  {
    title: "Library",
    icon: <MdOutlineVideoLibrary color={"white"} size={25} />,
  },
];
