/* eslint-disable react/prop-types */
// CartTotals.js

import styles from "./CartTotals.module.css"; // Import your external CSS module

const CartTotals = ({ subtotal, discount, tax, shipping }) => {
  // Calculate the total amount including discounts, taxes, and shipping
  const totalAmount = subtotal - discount + tax + shipping;

  return (
    <div className={styles.cartTotals}>
      <h5>Cart totals</h5>
      <div>
        
      </div>
      <p className={styles.subtotal}><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></p>
      {/* <p className={styles.discount}>Discount: ${discount.toFixed(2)}</p>
      <p className={styles.tax}>Tax: ${tax.toFixed(2)}</p>
      <p className={styles.shipping}>Shipping: ${shipping.toFixed(2)}</p> */}
      <p className={styles.total}><span>Total:</span> <span>${totalAmount.toFixed(2)}</span> </p>
    </div>
  );
};

export default CartTotals;
