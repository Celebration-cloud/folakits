/* eslint-disable react/prop-types */
import { useState } from "react";

const Orders = ({ orders, onRepeatOrder }) => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders
    .filter((order) =>
      order.status.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((order) =>
      order.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const menuStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    flexWrap: wr
  };

  const inputStyle = {
    padding: "10px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    color: "black",
  };

  const orderCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%", // Adjust width as needed
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
    <div>
      <div style={menuStyle}>
        <select
          style={inputStyle}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="delivered">Delivered</option>
          <option value="shipped">Shipped</option>
          <option value="processing">Processing</option>
        </select>
        <input
          style={inputStyle}
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredOrders.map((order, index) => (
        <div key={index} style={orderCardStyle}>
          <h3>Order #{order.title}</h3>
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
