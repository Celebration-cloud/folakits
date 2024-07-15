/* eslint-disable react/prop-types */
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import CardComponent from "../reuseable/card/CardComponent";
import BreadLink from "../reuseable/breadlink/BreadLink";
import { useState } from "react";
import styles from './ShopComponent.module.css'
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
      <div className={styles.breadcrumb}>Home - Shop</div>
      <div className={styles.sortingSection}>
        <span>Showing all {filteredProducts.length} results</span>
        <select onChange={(e) => sortProducts(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          {/* Add more sorting options here */}
        </select>
        <span style={{cursor: ""}}>
          <i className="fa-solid fa-filter"></i>Filters
        </span>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product, index) => (
          <CardComponent key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopComponent;
