
const CartTotals = () => {
  // Assume static cart data
  const subtotal = 7.3; // Example subtotal
  const total = subtotal; // For now, assume no additional costs

  const styles = {}
  return (
    <div
      style={}
    >
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      {/* Add other cart totals (e.g., discounts, taxes, shipping) if needed */}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};
