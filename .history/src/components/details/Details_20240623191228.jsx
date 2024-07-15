import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import CarouselImage from "./CarouselImage";
import styles from "./Details.module.css";
import { useState } from "react";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
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
            <Counter />
            <Button>Add to cart</Button>
          </section>
          <section>
            <span>Open sizes guide</span>
            <span>
              <i className="fa-regular fa-heart fa-xl"></i>
              <span>Add to Wishlist</span>
            </span>
          </section>
          <section>
            <h5>Description</h5>
            <p>
              Pastel Jacket with Bejewelled collar exclusive pattern by John
              Malkovich and printed on soft cotton fabric.Made in Italy. Quilted
              Design Contrasted faux-fur collar Loops on the shoulder Side zip
              pockets Two side pockets with one press stud fasteneing Long
              sleeve with elastic cuff's Zip fasteneing on the front section
              Side length 31.5cm Back length 56.5cm
            </p>
          </section>
          <sec
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
