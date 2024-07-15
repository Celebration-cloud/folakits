import React, { useState } from 'react';

const promotions = [
  { id: 1, name: 'BeFlashdrive4', price: '$7.30' },
  { id: 2, name: 'BePencil', price: '$65.80' },
  // Add more products as needed
];

function HotPromotions() {
  const [current, setCurrent] = useState(0);

  const promotionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const arrowStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    userSelect: 'none',
  };

  const nextPromotion = () => {
    setCurrent((prev) => (prev + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setCurrent((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div style={promotionStyle}>
      <div style={arrowStyle} onClick={prevPromotion}><</div>
      <div>
        <h2>{promotions[current].name}</h2>
        <p>{promotions[current].price}</p>
      </div>
      <div style={arrowStyle} onClick={nextPromotion}>></div>
    </div>
  );
}

export default HotPromotions;
