/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Orders from "./Orders";

const UserDashboard = ({name}) => {
  const [activeMenu, setActiveMenu] = useState("orders");
  useEffect(() => {
    if(name){
      setActiveMenu(name)
    }
  }, [name])
  
  const orders = [
    {
      title: "001",
      date: "2024-06-18",
      total: 199.99,
      status: "Delivered",
      items: [
        // ... list of items
      ],
    },
    {
      title: "002",
      date: "2024-06-15",
      total: 299.99,
      status: "Shipped",
      items: [
        // ... list of items
      ],
    },
    // ... more orders
  ];
   const handleRepeatOrder = (orderId) => {
     // Logic to handle repeating an order
     // This could involve adding the items from the order back into the cart, for example
     console.log(`Repeating order with ID: ${orderId}`);
     // Add logic to fetch order details and add them to cart
   };
  const menuStyle = {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: 0,
  };

  const menuItemStyle = (menuName) => ({
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: activeMenu === menuName ? "#ddd" : "transparent",
  });

  const contentStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };
  
  return (
    <div>
      <ul style={menuStyle}>
        <li
          style={menuItemStyle("orders")}
          onClick={() => setActiveMenu("orders")}
        >
          Orders
        </li>
        <li
          style={menuItemStyle("wishlist")}
          onClick={() => setActiveMenu("wishlist")}
        >
          Wishlist
        </li>
        <li
          style={menuItemStyle("settings")}
          onClick={() => setActiveMenu("settings")}
        >
          Account Settings
        </li>
      </ul>
      <div style={contentStyle}>
        {activeMenu === "orders" && (
          <Orders orders={orders} onRepeatOrder={handleRepeatOrder} />
        )}
        {activeMenu === "wishlist" && (
          <div>Your wishlist will be displayed here.</div>
        )}
        {activeMenu === "settings" && (
          <div>Your account settings will be displayed here.</div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;