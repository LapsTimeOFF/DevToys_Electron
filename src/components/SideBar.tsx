import {
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Typography,
} from "@mui/material";
import { log } from "../utils/node-api";
import { Link } from "react-router-dom";
import { Router } from "@/utils/pages";

function SideBar() {
  log("SideBar.tsx", `Starting rendering SideBar`);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "100vh",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {Router.map((Page, index, array) => {
        if (Page.ignoreList) return;
        log(
          "SideBar.tsx",
          `Rendering ${Page.type === "page" ? "tab" : Page.type} "${
            Page.title
          }"`
        );

        switch (Page.type) {
          case "cathegory":
            return (
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                key={index}
              >
                {Page.title}
              </ListSubheader>
            );

          case "page":
            return (
              // @ts-ignore
              <ListItemButton
                component={Link}
                to={Page.path}
                key={index}
                sx={{
                  bgcolor:
                    window.location.pathname === Page.path
                      ? "action.hover"
                      : "background.default",
                }}
              >
                <ListItemIcon>{Page.icon}</ListItemIcon>
                <Typography sx={{ color: "text.primary" }}>
                  {Page.title}
                </Typography>
              </ListItemButton>
            );

          default:
            break;
        }
      })}
    </List>
  );
}

export default SideBar;
