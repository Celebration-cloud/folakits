import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import CarouselImage from "./CarouselImage";
import styles from "./Details.module.css";
import { useState } from "react";
import Counter from "../reuseable/counter/Counter";
function Details() {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <Nav />
      <div>
        <CarouselImage />
        <div>
          <h3>Pastel Jacket With Bejewelled Collar</h3>
          <span>79.99 GBP</span>
          <section>
            
          </section>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">SIZE</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="SIZE"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Counter/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
