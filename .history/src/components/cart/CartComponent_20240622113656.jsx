import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import ProductItem from "./ProductItem";
import CartTotals from "./CartTotals";
import CheckoutForm from "./CheckoutForm";

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
    const cartTotalsData = {
      subtotal: 100.0, // Example subtotal
      discount: 10.0, // Example discount
      tax: 8.0, // Example tax
      shipping: 5.0, // Example shipping cost
    };
  const styles = {
    container: {
      display: "inline-flex", 
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "20px",
      width: "100%",
      backgroundColor: "#f5f5f5",
    },
    productSection: {
      width: "70%",
      // Add product section styling here
    },
    cartTotalsSection: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: "20px",
      width: "30%",
      height: "100%",
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
      <StepIndicator currentStep={currentStep} />

      <section style={{ display: "inline-flex", width: "100%", gap: "20px" }}>
        {/* Product Section */}
        <div style={styles.productSection}>
          {/* Product Item */}
          <div style={{ width: "100%" }}>
            {currentStep === 1 && <ProductItem {...product} />}
            {currentStep === 2 && <CheckoutForm />}

            {/* Add more product items here */}
          </div>
          {/* Add product details here */}
        </div>

        {/* Cart Totals Section */}
        <div style={styles.cartTotalsSection}>
          {/* Cart totals details here */}
          <h5 style={{textAlign: "center"}}>Cart totals</h5>
          <CartTotals {...cartTotalsData} />
          {currentStep < 3 && (
            <button
              onClick={goToNextStep}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {currentStep === 1 && "Proceed to Checkout"}
              {currentStep === 2 && "Place Order"}
              {currentStep === 3 && "Proceed to Checkout"}
            </button>
          )}
          <button>Continu</button>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
