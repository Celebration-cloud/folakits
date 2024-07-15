import { useState } from "react";
import Orders from "./Orders";

const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("orders");

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
          <Orders/>
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
          <div>Your orders will be displayed here.</div>
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