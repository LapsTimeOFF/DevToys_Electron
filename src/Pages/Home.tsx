import SideBar from '@/components/SideBar';
import { Typography, Box, Link, Grid } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
      <Grid container>
      <Grid item xs={6} md={4}>
        <SideBar />
      </Grid>
      <Grid item xs={6} md={8}>
        <Box sx={{color: 'text.primary', m: "0 auto", textAlign: "center"}}>
          <Typography variant='h1' sx={{mt:2}}>Welcome to DevToys Electron!</Typography>
          <Typography>This app is a fork from <Link href="https://github.com/veler/DevToys">veler/DevToys</Link> that is only available for Windows or MacOS (<Link href="https://github.com/ObuchiYuki/DevToysMac">with this fork</Link>).</Typography>
          <Typography>So I've decided to rebuild it using Vite, TypeScript, React and Electron, so it's compatible with all of the OS!</Typography>
          <Typography sx={{mt: 2}}>You will find all the modules that are available in the side bar.</Typography>
        </Box>
      </Grid>
    </Grid>
    );
};

export default Home;