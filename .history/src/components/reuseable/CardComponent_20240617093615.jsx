import { useState } from "react";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import { Rating } from "@mui/material";
const CardComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "200px",
    height: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    transition: "opacity 0.3s ease",
    opacity: isHovered ? 0 : 1,
  };

  const hoverImageStyle = {
    ...imageStyle,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: isHovered ? 1 : 0,
  };

  const iconStyle = {
    position: "absolute",
    display: 'inline-flex',
    flexDirection: 'column',
    padding: "10px",
    gap: "20px",
    top: "10px",
    right: "10px",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div>
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
        <h5>BeSmartwatch2</h5>
        <Rating/>
    </div>
  );
};

export default CardComponent;
