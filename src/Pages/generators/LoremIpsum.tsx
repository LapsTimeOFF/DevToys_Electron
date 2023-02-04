import InputBar from "@/components/InputBar";
import SelectorBar from "@/components/SelectorBar";
import SideBar from "@/components/SideBar";
import {
  Typography,
  Box,
  Link,
  Grid,
  TextField,
  NativeSelect,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const LoremIpsum = () => {
  // const [type, setType] = useState<'Words' | 'Sentences' | 'Paragraphs' | ''>('');

  const generateLorem = () => {};

  return (
    <Grid container>
      <Grid item xs={6} md={4}>
        <SideBar />
      </Grid>
      <Grid item xs={6} md={8}>
        <Box sx={{ color: "text.primary", m: "0 auto" }}>
          <SelectorBar title={"Type"} subtitle={"Type of generating Lorem Ipsum"} options={['Words', 'Sentences', 'Paragraphs']} />
          <InputBar title={"Length"} subtitle={"Length of the Lorem Ipsum"}/>
          <TextField
            id="component-simple"
            defaultValue=""
            variant="outlined"
            sx={{ width: "90%", mt: 3 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoremIpsum;
