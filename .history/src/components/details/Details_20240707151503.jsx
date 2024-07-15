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
      <Conte
      <hr/>
      <Footer />
    </div>
  );
}

export default Details;
