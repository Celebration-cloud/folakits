import React, { useState } from 'react';

const promotions = [
  { id: 1, name: 'BeFlashdrive4', price: '$7.30', imageUrl: 'path/to/flashdrive/image' },
  { id: 2, name: 'BePencil', price: '$65.80', imageUrl: 'path/to/pencil/image' },
  // Add more products as needed
];

function Promotions() {
  const [current, setCurrent] = useState(0);

  const promotionContainerStyle = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    width: "100%",
    padding: "50px",
    borderRadius: '10px',
  };

  const promotionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100px', // Adjust as needed
    height: '100px', // Adjust as needed
    marginBottom: '10px',
  };

  const arrowStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    userSelect: 'none',
    padding: '0 20px',
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
        <section>
          <span style={arrowStyle} onClick={prevPromotion}>
            {"<"}
          </span>
          <span style={arrowStyle} onClick={nextPromotion}>
            {">"}
          </span>
        </section>
      </div>

      <section style={{d}}>
        <div style={promotionStyle}>
          <img
            src={promotions[current].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h3>{promotions[current].name}</h3>
          <p>{promotions[current].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promotions[current].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h3>{promotions[current].name}</h3>
          <p>{promotions[current].price}</p>
        </div>
        <div style={promotionStyle}>
          <img
            src={promotions[current].imageUrl}
            alt={promotions[current].name}
            style={imageStyle}
          />
          <h3>{promotions[current].name}</h3>
          <p>{promotions[current].price}</p>
        </div>
      </section>
    </div>
  );
}

export default Promotions;
