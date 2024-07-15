/* eslint-disable react/prop-types */
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import CardComponent from "../reuseable/card/CardComponent";
import BreadLink from "../reuseable/breadlink/BreadLink";
import { useState } from "react";
function ShopComponent({name}) {
  const products = [
    {
      name: "Baby shoes",
      img: img1,
      price: "$11.00",
      originalPrice: "$16.00",
      onSale: true,
    },
    {
      name: "Baby Socks",
      img: img2,
      price: "$15.00",
      originalPrice: "$19.00",
      onSale: false,
    },
    {
      name: "Bear boots",
      img: img3,
      price: "$25.00",
      originalPrice: "$28.00",
      onSale: true,
    },
    { name: "Cardigan longsleeve", img: img1, price: "$66.00", onSale: false },
    // Add more products as needed
  ];
  const [sortType, setSortType] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    header: {
      backgroundColor: "#f0f0f0",
      padding: "30px 0px 30px 0px",
      fontSize: "24px",
      textAlign: "center",
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%",
    },
    breadcrumb: {
      padding: "10px 20px",
      fontSize: "16px",
    },
    sortingSection: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      alignItems: "center",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
      padding: "10px 20px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
    },
    saleTag: {
      backgroundColor: "#ff4500",
      color: "white",
      padding: "2px 5px",
      fontSize: "14px",
      top: "10px",
      right: "10px",
    },
    productImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    productName: {
      fontSize: "18px",
      margin: "10px 0",
    },
    productPrice: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    originalPrice: {
      textDecoration: "line-through",
      color: "#777",
      fontSize: "14px",
    },
  };

consol
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
    <div style={styles.container}>
      <BreadLink name={name}>Shop</BreadLink>
      <div style={styles.breadcrumb}>Home - Shop</div>
      <div style={styles.sortingSection}>
        <span>Showing all {filteredProducts.length} results</span>
        <span>Show: 6 12 24 36</span>
        <select onChange={(e) => sortProducts(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          {/* Add more sorting options here */}
        </select>
        <span>Filters</span>
      </div>
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <CardComponent key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopComponent;
