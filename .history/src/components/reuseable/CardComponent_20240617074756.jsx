import { useState } from "react";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
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
    top: "10px",
    right: "10px",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
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
        <i className="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-link"></i>
      </div>
      {/* Additional content can be added here */}
    </div>
  );
};

export default CardComponent;
