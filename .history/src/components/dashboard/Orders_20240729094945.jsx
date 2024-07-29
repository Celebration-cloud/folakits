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
      <div className="inline-flex justify-between mb-5 flex-wrap gap-4">
        <select
          className="p-2 m-0.5 rounded border bg-white text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
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
          className="bg-gray-200 p-4 rounded-lg mb-5 shadow-md w-full"
        >
          <h3 className="text-xl font-semibold">Order: {order.orderId}</h3>
          {order.cart?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-border py-2"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.img[0]}
                  alt="headphones icon"
                  className="w-6 h-6"
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
          <p>Date: {order.createdAt.toDate().toLocaleString()}</p>
          <p>Total: &#x20A6;{order.total.toFixed(2).toLocaleString()}</p>
          <p sty>Status: {order.status}</p>
          {/* Add more order details as needed */}
          <button
            className=" top-4 right-4 p-2 px-4 mt-4 rounded bg-blue-500 text-white border-none cursor-pointer"
            onClick={() => onRepeatOrder(order.cart)}
          >
            Repeat Order
          </button>
        </div>
      ))}
      {filteredOrders < 1 && (
        <p style={{ textAlign: "center" }}>No Orders yet</p>
      )}
    </div>
  );
};

export default Orders;
