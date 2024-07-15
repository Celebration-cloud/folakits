import React from "react";

const Orders = ({ orders, onRepeatOrder }) => {
  const ordersContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const orderCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "90%", // Adjust width as needed
    textAlign: "left",
    position: "relative", // For positioning the repeat button
  };

  const repeatButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={ordersContainerStyle}>
      {orders.map((order, index) => (
        <div key={index} style={orderCardStyle}>
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <p>Status: {order.status}</p>
          {/* Add more order details as needed */}
          <button
            style={repeatButtonStyle}
            onClick={() => onRepeatOrder(order.id)}
          >
            Repeat Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
