import nodeLogo from "./assets/node.svg";
import { useState } from "react";
import "./App.scss";
import { Box, Container, Typography } from "@mui/material";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Box>
        <Typography variant="h1">DevToys_Electron</Typography>
      </Box>
    </Container>
  );
}

export default App;
