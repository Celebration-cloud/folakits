import styles from './CartTotals.module.css'
const CartTotals = () => {
  // Assume static cart data
  const subtotal = 7.3; // Example subtotal
  const total = subtotal; // For now, assume no additional costs

  return (
    <div
      style={styles.total}
    >
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      {/* Add other cart totals (e.g., discounts, taxes, shipping) if needed */}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};
export default