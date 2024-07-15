/* eslint-disable react/prop-types */
import { useState } from "react";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import { Rating } from "@mui/material";
import ImageItem from "./ImageItem";
const CardComponent = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(product)
  const styles = {
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

  const outButton ={
    backgroundColor: "transparent"
    
  }

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        boxSizing: "border-box",
      }}
    >
      <ImageItem/>
      <h5>
        {product?.name}
        {!product && "BeFlash"}
      </h5>
      <Rating />
      <strong style={{ display: "inline-flex", gap: "10px" }}>
        <span style={styles.productPrice}>{product?.price}</span>
        {product?.originalPrice && (
          <span style={styles.originalPrice}>{product?.originalPrice}</span>
        )}
      </strong>
    </div>
  );
};

export default CardComponent;
