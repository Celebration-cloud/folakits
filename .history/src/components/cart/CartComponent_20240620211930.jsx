import React, { useState } from "react";

const CartComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // Function to proceed to the next step
    const goToNextStep = () => {
      setCurrentStep(currentStep + 1);
    };
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "20px",
      backgroundColor: "#f5f5f5",
    },
    productSection: {
      width: "70%",
      // Add product section styling here
    },
    cartTotalsSection: {
      width: "30%",
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      // Add cart totals section styling here
    },
    // Add more inline styles as needed
  };
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
    <div style={styles.container}>
      {/* Step Indicator */}
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

      {/* Product Section */}
      <div style={styles.productSection}>
        {/* Product Item */}
        {/* Add product details here */}
      </div>

      {/* Cart Totals Section */}
      <div style={styles.cartTotalsSection}>
        {/* Cart totals details here */}
        {currentStep < 3 && (
          <button
            onClick={goToNextStep}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
