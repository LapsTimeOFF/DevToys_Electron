import Home from "@/Pages/Home";
import HomeIcon from "@mui/icons-material/Home";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Typography } from "@mui/material";

export type Page = {
  type: "page" | "cathegory";
  title: string;
  path?: string;
  description?: string;
  ignoreList?: boolean;
  icon?: any;
  component?: any;
};

export const Router: Array<Page> = [
  {
    type: "page",
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    component: <Home/>,
  },
  {
    type: "cathegory",
    title: "Generators",
  },
  {
    type: "page",
    title: "Lorem Ipsum Generator",
    path: "/generator/lorem",
    icon: <ShortTextIcon />,
  }
];
