/* eslint-disable react/prop-types */
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import CardComponent from "../reuseable/card/CardComponent";
import BreadLink from "../reuseable/breadlink/BreadLink";
import { useState } from "react";
import styles from './ShopComponent.module.css'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function ShopComponent({name}) {
  const products = [
    {
      name: "Baby shoes",
      img: [img1, img3],
      price: "$11.00",
      originalPrice: "$16.00",
      onSale: true,
    },
    {
      name: "Baby Socks",
      img: [img2],
      price: "$15.00",
      originalPrice: "$19.00",
      onSale: false,
    },
    {
      name: "Bear boots",
      img: [img3],
      price: "$25.00",
      originalPrice: "$28.00",
      onSale: true,
    },
    { name: "Cardigan longsleeve", img: [img1], price: "$66.00", onSale: false },
    // Add more products as needed
  ];
  const [sortType, setSortType] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
console.log(sortType, filteredProducts)
  // ... (rest of the component)
   const sortProducts = (type) => {
     const sortedProducts = [...filteredProducts];
     switch (type) {
       case "priceLowHigh":
         sortedProducts.sort(
           (a, b) =>
             parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1))
         );
         break;
       case "priceHighLow":
         sortedProducts.sort(
           (a, b) =>
             parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1))
         );
         break;
       // Add more sorting cases as needed
     }
     setFilteredProducts(sortedProducts);
     setSortType(type);
   };

  return (
    <div className={styles.container}>
      <BreadLink name={name}>Shop</BreadLink>
      <div className={styles.sortingSection}>
        <span>Sort by:</span>
        <div className={styles.sort}>
          <span>Showing all {filteredProducts.length} results</span>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Default"
              value={sortType}
              onChange={(e) => sortProducts(e.target.value)}
            >
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>

        <span
          style={{ cursor: "pointer" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-filter"></i>Filters
        </span>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product, index) => (
          <CardComponent key={index} product={product} />
        ))}
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Folakits
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
    </div>
  );
}

export default ShopComponent;
