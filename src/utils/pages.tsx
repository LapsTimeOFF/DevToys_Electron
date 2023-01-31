import HomeIcon from "@mui/icons-material/Home";

export type Page = {
  type: "page" | "cathegory";
  title: string;
  path?: string;
  icon?: any;
  component?: any;
};

export const Router = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  } as Page,
];
