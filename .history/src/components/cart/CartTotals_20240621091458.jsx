
const CartTotals = () => {
  // Assume static cart data
  const subtotal = 7.3; // Example subtotal
  const total = subtotal; // For now, assume no additional costs

  const styles = {
    total: { width: '30%', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }
  }
  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      {/* Add other cart totals (e.g., discounts, taxes, shipping) if needed */}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

