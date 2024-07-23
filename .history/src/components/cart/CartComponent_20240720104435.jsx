import React, { useRef, useState } from "react";
import StepIndicator from "./StepIndicator";
import ProductItem from "./ProductItem";
import CartTotals from "./CartTotals";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";
import styles from './CartComponent.module.css'
import { useSelector } from "react-redux";
const CartComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()
        const { userData } = useSelector((state) => state.user);
        const cartListRef = useRef([]);
        cartListRef.current = userData ? userData[0]?.cart : [];
        console.log(cartListRef.current)
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

  return (
    <div className={styles.container}>
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} />

      <section className={styles.sections}>
        {/* Product Section */}
        <div className={styles.productSection}>
          {/* Product Item */}
          <div style={{ width: "100%" }}>
            {currentStep === 1 && <ProductItem cat />}
            {currentStep === 2 && <CheckoutForm />}

            {/* Add more product items here */}
          </div>
          {/* Add product details here */}
        </div>

        {/* Cart Totals Section */}
        <div className={styles.cartTotalsSection}>
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
          <button style={{
            width: "100%",
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "black",
          }} onClick={() => navigate(`/${"Shop"}`)}>Continue Shopping</button>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
