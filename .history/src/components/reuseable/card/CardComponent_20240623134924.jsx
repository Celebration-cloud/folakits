/* eslint-disable react/prop-types */
import { useState } from "react";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import { Rating } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
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

  const cardStyle = {
    width: "100%",
    height: "250px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
  };

  const imageStyle = {
    width: "100%",
    padding: "30px",
    height: "100%",
    transition: "opacity 0.3s ease",
    opacity: product?.onSale ? (product.img[1] && isHovered ? 0 : 1)  : 0.3 ,
  };

  const hoverImageStyle = {
    ...imageStyle,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: product?.onSale && (product.img[1] && isHovered) ? 1 : 0,
  };

  const outStock = {
    ...imageStyle,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: !product?.onSale  ? 1 : 0,
  };

  const iconStyle = {
    position: "absolute",
    display: "inline-flex",
    flexDirection: "column",
    padding: "10px",
    gap: "10px",
    top: "0px",
    right: "0px",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
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
      <
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
