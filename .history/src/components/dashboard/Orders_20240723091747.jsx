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
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <div className="inline-flex justify-between mb-20 flex-wrap gap-10">
        <select
          className="p-2 m-0.5 rounded border bg-white text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="delivered">Delivered</option>
          <option value="shipped">Shipped</option>
          <option value="processing">Processing</option>
        </select>
        <input
          className="p-2 m-0.5 rounded border bg-white text-black"
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredOrders.map((order, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 m-2 flex-col rounded-lg shadow-md w-full relative"
        >
          <h3 className="text-xl font-semibold">Order: {order.orderId}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <p>Status: {order.status}</p>
          {/* Add more order details as needed */}
          <button
            className="absolute top-4 right-4 p-2 rounded bg-blue-500 text-white border-none cursor-pointer"
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
