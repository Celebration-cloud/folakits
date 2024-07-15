/* eslint-disable react/prop-types */
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CarouselImage from "./CarouselImage";
import { useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
function Content({pad}) {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <CarouselImage />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>Pastel Jacket With Bejewelled Collar</h3>
        <span className={styles.price}>79.99 GBP</span>
        <section className={styles.selection}>
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
          <Button>
        </section>
        <section className={styles.wishing}>
          <span>Open sizes guide</span>
          <span className={styles.wish}>
            <i className="fa-regular fa-heart fa-xl"></i>
            <span>Add to Wishlist</span>
          </span>
        </section>
        <section className={styles.describe}>
          <h5>Description</h5>
          <p>
            Pastel Jacket with Bejewelled collar exclusive pattern by John
            Malkovich and printed on soft cotton fabric.Made in Italy. Quilted
            Design Contrasted faux-fur collar Loops on the shoulder Side zip
            pockets Two side pockets with one press stud fasteneing Long sleeve
            with elastic cuff's Zip fasteneing on the front section Side length
            31.5cm Back length 56.5cm
          </p>
        </section>
        <section className={styles.share}>
          <h5>Share</h5>
          <span>
            <i className="fa-brands fa-facebook fa-xl"></i>
            <i className="fa-brands fa-instagram fa-xl"></i>
            <i className="fa-brands fa-square-whatsapp fa-xl"></i>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Content
