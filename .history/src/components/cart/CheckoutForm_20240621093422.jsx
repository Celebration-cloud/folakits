import React from "react";
import styles from ''
const CheckoutForm = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        {/* Add other form fields (e.g., address, payment details) */}
        {/* ... */}

        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
