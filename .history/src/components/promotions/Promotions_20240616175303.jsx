import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import { useState } from "react";
import useWidthSize from '../reuseable/width/useWidthSize'
const promote = [
  {
    1: [
      { id: 1, name: "BeFlashdrive4", price: "$7.30", imageUrl: img1 },
      { id: 2, name: "BePencil", price: "$65.80", imageUrl: img2 },
      { id: 3, name: "Clock", price: "$35.80", imageUrl: img3 },
    ],
  },
  {
    1: [
      { id: 1, name: "BeFlash", price: "$17.30", imageUrl: img1 },
      { id: 2, name: "Pencil", price: "$55.80", imageUrl: img2 },
      { id: 3, name: "BeClock", price: "$85.80", imageUrl: img3 },
    ],
  },
];
let sections = { display: "inline-flex", justifyContent: "space-around" };
let promotionContainerStyle = {
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  padding: "50px",
  borderRadius: "10px",
  gap: "40px",
};
let promotionStyle = {
  display: "inline-flex",
  flexDirection: "column",
  textAlign: "left",
};
function Promotions() {
  const [current, setCurrent] = useState(0);
  const {width} = useWidthSize()

  if(width < 780) {
    sections = { ...sections, flexWrap: "wrap", gap: "10px" };
  }else {
    sections 
  }
  if(width > 426) {
    promotionContainerStyle 
    promotionStyle
  }else{
    promotionContainerStyle = {...promotionContainerStyle, padding: "10px"}
    promotionStyle = {...promotionStyle, width: "100%", padding: ""}
  }
  

  const imageStyle = {
    width: "100%", // Adjust as needed
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
    setCurrent((prev) => (prev + 1) % promote.length);
  };

  const prevPromotion = () => {
    setCurrent((prev) => (prev - 1 + promote.length) % promote.length);
  };

  return (
    <div style={promotionContainerStyle}>
      <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
        <h6>Promotion</h6>
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
        style={sections}
      >
        <div style={promotionStyle}>
          <img
            src={promote[current][1][0].imageUrl}
            alt={promote[current][1][0].name}
            style={imageStyle}
          />
          <h5>{promote[current][1][0].name}</h5>
          <p>{promote[current][1][0].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promote[current][1][1].imageUrl}
            alt={promote[current][1][1].name}
            style={imageStyle}
          />
          <h5>{promote[current][1][1].name}</h5>
          <p>{promote[current][1][1].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promote[current][1][2].imageUrl}
            alt={promote[current][1][2].name}
            style={imageStyle}
          />
          <h5>{promote[current][1][2].name}</h5>
          <p>{promote[current][1][2].price}</p>
        </div>
      </section>
    </div>
  );
}

export default Promotions;
