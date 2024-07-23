/* eslint-disable react/prop-types */
// CartTotals.js

import styles from "./CartTotals.module.css"; // Import your external CSS module

const CartTotals = ({ subtotal, shipping , cart, step}) => {
  // Calculate the total amount including discounts, taxes, and shipping
  const totalAmount = subtotal + shipping;

  console.log(cart)
  return (
    <div className={styles.cartTotals}>
      <p className={styles.subtotal}>
        <span>Subtotal:</span> <span>&#x20A6;{subtotal?.toFixed(2)}</span>
      </p>
      {step > 1 &&
        cart?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-border py-2"
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/24x24"
                alt="headphones icon"
                classN="w-6 h-6"
              />
              <span className="text-foreground font-semibold">
                {item.product}
              </span>
              <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                × {item.amount}
              </span>
            </div>
            <span className="text-foreground">
              &#x20A6;{item.amount * item.price}
            </span>
          </div>
        ))}
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
