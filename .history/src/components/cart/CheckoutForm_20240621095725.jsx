import styles from './CheckoutForm.module.css'
const CheckoutForm = () => {
  return (
    <div className={styles["checkout-container"]}>
      <h2>Checkout</h2>
      <form className={styles["checkout-form"]}>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Address:</label>
        <input type="text" placeholder="Enter your address" />

        <label>Card Number:</label>
        <input type="text" placeholder="Enter your card number" />

        <div className="card-details">
          <div>
            <label>Expiration Date:</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
