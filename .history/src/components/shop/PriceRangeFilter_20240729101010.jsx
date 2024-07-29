// PriceRangeFilter.js

import { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./PriceRangeFilter.module.css"; // Your CSS module

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState([500, 50]);

  const handleSliderChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const handleReset = () => {
    setPriceRange([0, 50]); // Reset to default values
  };

  return (
    <div className={styles.priceRangeFilter}>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        min={0}
        max={15000}
        valueLabelDisplay="auto"
      />
      <div className={styles.inputFields}>
        <TextField label="Min Price" value={priceRange[0]} />
        <TextField label="Max Price" value={priceRange[1]} />
      </div>
      <Button variant="outlined" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default PriceRangeFilter;
