/* eslint-disable react/prop-types */
// CartTotals.js

import styles from "./CartTotals.module.css"; // Import your external CSS module

const CartTotals = ({ subtotal, shipping }) => {
  // Calculate the total amount including discounts, taxes, and shipping
  const totalAmount = subtotal - shipping;

  return (
    <div className={styles.cartTotals}>
      <p className={styles.subtotal}>
        <span>Subtotal:</span> <span>&#x20A6;{subtotal?.toFixed(2)}</span>
      </p>
      <div cla="flex justify-between items-center border-b border-border py-2">
        <div cla="flex items-center space-x-2">
          <span cla="text-foreground font-semibold">BeHeadphones</span>
          <span cla="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
            × 4
          </span>
        </div>
        <span cla="text-foreground">$343.60</span>
      </div>
      <div cla="flex justify-between items-center py-2">
        <div cla="flex items-center space-x-2">
          <span cla="text-foreground font-semibold">BeSmartphone3</span>
          <span cla="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
            × 1
          </span>
        </div>
        <span cla="text-foreground">$250.00</span>
      </div>
      {/* <p className={styles.discount}>Discount: ${discount.toFixed(2)}</p>
      <p className={styles.tax}>Tax: ${tax.toFixed(2)}</p> */}
      <p className={styles.shipping}>Shipping: &#x20A6;{shipping.toFixed(2)}</p>
      <p className={styles.total}>
        <span>Total:</span> <span>&#x20A6;{totalAmount?.toLocaleString()}</span>{" "}
      </p>
    </div>
  );
};

export default CartTotals;
