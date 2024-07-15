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
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const promotionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
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
      <div style={{display: "inline-flex"}}>
        <h6>Featured Product</h6>
        <section>
          <spa style={arrowStyle} onClick={prevPromotion}>
            {"<"}
          </spa>
          <div style={arrowStyle} onClick={nextPromotion}>
            {">"}
          </div>
        </section>
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
    </div>
  );
}

export default Promotions;
