/* eslint-disable react/prop-types */
// CartTotals.js

import React from "react";
import styles from "./CartTotals.module.css"; // Import your external CSS module

const CartTotals = ({ subtotal, discount, tax, shipping }) => {
  // Calculate the total amount including discounts, taxes, and shipping
  const totalAmount = subtotal - discount + tax + shipping;

  return (
    <div className={styles.cartTotals}>
      <p className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</p>
      <p className={styles.discount}>Discount: ${discount.toFixed(2)}</p>
      <p className={styles.tax}>Tax: ${tax.toFixed(2)}</p>
      <p className={styles.shipping}>Shipping: ${shipping.toFixed(2)}</p>
      <p className={styles.total}>Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartTotals;
