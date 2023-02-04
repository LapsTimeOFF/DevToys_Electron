import { Box, Typography, NativeSelect } from "@mui/material";
import React from "react";

const SelectorBar = ({title, subtitle, options}: {title: string, subtitle: string, options: Array<string>}) => {
  return (
    <Box
      display="flex"
      bgcolor="action.selected"
      height={45}
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
        <NativeSelect>
          {/* <option value="Option 1">Option 1</option> */}
          {options.map((val) => {
            return <option value={val} key={val}>{val}</option>;
          })}
        </NativeSelect>
      </Box>
    </Box>
  );
};

export default SelectorBar;
