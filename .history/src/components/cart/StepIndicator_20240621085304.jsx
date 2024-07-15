import React from 'react'

function StepIndicator() {
     const stepIndicatorStyle = {
       listStyleType: "none",
       display: "flex",
       justifyContent: "space-between",
       paddingBottom: "20px",
     };

     const stepStyle = {
       fontSize: "18px",
       fontWeight: "bold",
       color: "#333",
       marginRight: "20px",
       cursor: "pointer",
     };
  return (
    <ul style={stepIndicatorStyle}>
      <li style={stepStyle} className={currentStep === 1 ? "active" : ""}>
        1 Cart
      </li>
      <li style={stepStyle} className={currentStep === 2 ? "active" : ""}>
        2 Checkout
      </li>
      <li style={stepStyle} className={currentStep === 3 ? "active" : ""}>
        3 Order
      </li>
    </ul>
  );
}

export default StepIndicator
