import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import ProductItem from "./ProductItem";

const CartComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // Function to proceed to the next step
    const goToNextStep = () => {
      setCurrentStep(currentStep + 1);
    };
    const product = {
      name: "BeFlashdrive",
      color: "Blue",
      size: "64 GB",
      price: 7.3,
      quantity: 1,
    };
  const styles = {
    container: {
      display: "flex",
      {display: "inline-flex", flexDirection: "column"}
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
   



  return (
    <div style={styles.container}>
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep}/>

      <section >
        {/* Product Section */}
      <div style={styles.productSection}>
        {/* Product Item */}
        <div style={{ width: '70%' }}>
                <ProductItem {...product} />
                {/* Add more product items here */}
              </div>
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
      </section>
      
    </div>
  );
};

export default CartComponent;
