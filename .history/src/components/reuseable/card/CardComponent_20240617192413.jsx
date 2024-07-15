/* eslint-disable react/prop-types */
import { useState } from "react";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import { Rating } from "@mui/material";
const CardComponent = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);

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
    opacity: product?.onSale && isHovered ? 0 : 1,
  };

  const hoverImageStyle = {
    ...imageStyle,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: product?.onSale && isHovered ? 1 : 0,
  };

  const outStock = {
    ...imageStyle,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: !product?.onSale ? 3 : 0,
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
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product?.onSale ? (
          <>
            <img
              src={img1} // Replace with the initial image path
              alt="Initial"
              style={imageStyle}
            />
            <img
              src={img2} // Replace with the hover image path
              alt="Hover"
              style={hoverImageStyle}
            />
          </>
        ) : (
          <>
            <img
              src={img1} // Replace with the initial image path
              alt="Initial"
              style={imageStyle}
            />
            <div
              style={{
                ...outStock,
                background:
                  "linear-gradient(to bottom, #ffffff 0%, #f0f0f0 50%)",
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
              }}
            >
              <button disabled style={{backgroundColor: "transparent", color: "black", border: "2px solid black"}}>Out of Stock</button>
            </div>
          </>
        )}

        <div style={iconStyle}>
          {/* Render the heart with ECG line icon here */}
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-cart-shopping"
          ></i>
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-link"
          ></i>
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-regular fa-heart"
          ></i>
          <i
            style={{
              backgroundColor: "white",
              padding: "6px",
              borderRadius: "100%",
            }}
            className="fa-solid fa-maximize"
          ></i>
        </div>
      </div>
      <h5>
        {product?.name}
        {!product && "BeFlash"}
      </h5>
      <Rating />
      <strong style={{ display: "inline-flex", gap: "10px" }}>
        <span style={styles.productPrice}>{product?.price}</span>
        <span style={styles.originalPrice}>{product?.originalPrice}</span>
      </strong>
    </div>
  );
};

export default CardComponent;
