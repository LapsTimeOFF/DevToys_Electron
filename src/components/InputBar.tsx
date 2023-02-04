import { Box, Typography, NativeSelect, TextField } from "@mui/material";
import React from "react";

const InputBar = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Box
      display="flex"
      bgcolor="action.selected"
      height={70}
      width="90%"
      mt={3}
    >
      <Box mr={2} flexGrow={1}>
        <Typography>{title}</Typography>
        <Typography color="text.secondary" fontSize={"10pt"}>
          {subtitle}
        </Typography>
      </Box>
      <Box mt={1} mr={1}>
        <TextField
          id="component-simple"
          defaultValue=""
          variant="outlined"
          sx={{fontSize: "14pt"}}
        />
      </Box>
    </Box>
  );
};

export default InputBar;
