import {
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Typography,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import { log } from "../utils/node-api";
import { Router } from "@/utils/pages";

log("SideBar.tsx", `SideBar loaded`);

function SideBar() {
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
        log("SideBar.tsx", )
        return (
          <ListItemButton component="a" href={Page.path} key={index}>
            <ListItemIcon>
              {Page.icon}
            </ListItemIcon>
            <Typography sx={{ color: "text.primary" }}>{Page.title}</Typography>
          </ListItemButton>
        );
      })}

      {/* <ListSubheader component="div" id="nested-list-subheader">
        Drafts
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <Typography sx={{ color: "text.primary" }}>Drafts</Typography>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <Typography sx={{ color: "text.primary" }}>Drafts</Typography>
      </ListItemButton> */}
    </List>
  );
}

export default SideBar;
