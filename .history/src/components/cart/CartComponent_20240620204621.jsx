// Cart.js

import React from "react";

const Cart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}
    >
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "8px" }}>
              {item.name} ({item.quantity} x ${item.price.toFixed(2)})
            </li>
          ))}
        </ul>
      )}
      <p style={{ fontWeight: "bold" }}>
        Total: ${calculateTotalPrice().toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
