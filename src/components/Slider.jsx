import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";

export default function RangeSlider({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        max={500}
      />
    </Box>
  );
}
