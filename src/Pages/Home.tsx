import { Typography, Box, Link } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Box sx={{color: 'text.primary', m: "0 auto"}}>
          <Typography variant='h1' sx={{mt:2}}>Welcome to DevToys Electron!</Typography>
          <Typography>This app is a fork from <Link href="https://github.com/veler/DevToys">veler/DevToys</Link> that is only available for Windows or MacOS (<Link href="https://github.com/ObuchiYuki/DevToysMac">with this fork</Link>).</Typography>
          <Typography>So I've decided to rebuild it using Vite, TypeScript, React and Electron, so it's compatible with all of the OS!</Typography>
        </Box>
    );
};

export default Home;