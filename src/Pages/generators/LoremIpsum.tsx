import SideBar from "@/components/SideBar";
import { Typography, Box, Link, Grid } from "@mui/material";
import React from "react";

const LoremIpsum = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={4}>
        <SideBar />
      </Grid>
      <Grid item xs={6} md={8}>
        <Box sx={{ color: "text.primary", m: "0 auto" }}>
          <Typography variant="h1" sx={{ mt: 2 }}>
            Lorem, ipsum.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoremIpsum;
