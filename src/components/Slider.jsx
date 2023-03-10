import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([20, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }} >
      <Slider 
        getAriaLabel={() => 'Price range'}
        value={value}
        min={10}
        max={500}
        step={10}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}