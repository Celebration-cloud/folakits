import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import { useState } from "react";
const promotions = [
  {
    id: 1,
    name: "BeFlashdrive4",
    price: "$7.30",
    imageUrl: img1,
  },
  {
    id: 2,
    name: "BePencil",
    price: "$65.80",
    imageUrl: img2,
  },
  // Add more products as needed
];
const promote = [
  {
    1: [
      { id: 1, name: "BeFlashdrive4", price: "$7.30", imageUrl: img1 },
      { id: 2, name: "BePencil", price: "$65.80", imageUrl: img2 },
      { id: 3, name: "Clock", price: "$35.80", imageUrl: img3 },
    ],
  },
  {
    2: [
      { id: 1, name: "BeFlash", price: "$7.30", imageUrl: img1 },
      { id: 2, name: "Pencil", price: "$65.80", imageUrl: img2 },
      { id: 3, name: "Clock", price: "$35.80", imageUrl: img3 },
    ],
  },
];

function Promotions() {
  const [current, setCurrent] = useState(0);

  const promotionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "50px",
    borderRadius: "10px",
    gap: "40px",
  };

  const promotionStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  };

  const imageStyle = {
    width: "200px", // Adjust as needed
    height: "230px", // Adjust as needed
    marginBottom: "10px",
    padding: '30px',
    backgroundColor: "#f8f9fa",
  };

  const arrowStyle = {
    cursor: "pointer",
    fontSize: "24px",
    userSelect: "none",
    padding: "0 20px",
    backgroundColor: "#f8f9fa",
  };

  const nextPromotion = () => {
    setCurrent((prev) => (prev + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setCurrent((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div style={promotionContainerStyle}>
      <div style={{ display: "inline-flex", justifyContent: "space-between" }}>
        <h6>Featured Product</h6>
        <section style={{ display: "inline-flex", gap: "10px" }}>
          <span style={arrowStyle} onClick={prevPromotion}>
            {"<"}
          </span>
          <span style={arrowStyle} onClick={nextPromotion}>
            {">"}
          </span>
        </section>
      </div>

      <section
        style={{ display: "inline-flex", justifyContent: "space-around" }}
      >
        <div style={promotionStyle}>
          <img
            src={promote[current][1][1].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h5>{promotions[current].name}</h5>
          <p>{promotions[current].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promotions[current].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h5>{promotions[current].name}</h5>
          <p>{promotions[current].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promotions[current].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h5>{promotions[current].name}</h5>
          <p>{promotions[current].price}</p>
        </div>
      </section>
    </div>
  );
}

export default Promotions;
