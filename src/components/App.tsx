import React from "react";
import SideBar from "./SideBar";
import "./App.scss";
import { Box, Container, Typography } from "@mui/material";
import ToolCard from "./ToolCard";

const App = () => {
  return (
    <Box sx={{display: "inline-list-item"}}>
      <SideBar />
      {/* <Container sx={{color: "text.primary"}}>
        <Typography>peanut</Typography>
      </Container> */}
      <ToolCard/>
    </Box>
  );
};

export default App;
