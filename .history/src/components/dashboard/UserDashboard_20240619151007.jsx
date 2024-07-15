/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import WishList from "./WishList";
import AccountSettings from "./AccountSettings";
import Billing from "./Billing";

const UserDashboard = ({name}) => {
  const [activeMenu, setActiveMenu] = useState("orders");
  const navigate = useNavigate()
  useEffect(() => {
    if(name){
      setActiveMenu(name)
    }
  }, [name])
  useCallback(
    () => {
      if (name) {
        setActiveMenu(name);
      }
    },
    [name],
  )
  
  
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
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const handleUpdateUser = (updatedUser) => {
    // Update user logic here
    console.log("Updated User:", updatedUser);
  };
  const handleSignOut = () => {
    // Sign out logic here
    console.log("User signed out");
  };

  // In your component render


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
          onClick={() => {
            navigate("/log/orders"), setActiveMenu("orders");
          }}
        >
          Orders
        </li>
        <li
          style={menuItemStyle("wishlist")}
          onClick={() => {
            navigate("/log/wishlist"), setActiveMenu("wishlist");
          }}
        >
          Wishlist
        </li>
        <li
          style={menuItemStyle("settings")}
          onClick={() => {
            navigate("/log/settings"), setActiveMenu("settings");
          }}
        >
          Account Settings
        </li>
        <li
          style={menuItemStyle("billing")}
          onClick={() => {
            navigate("/log/billing"), setActiveMenu("billing");
          }}
        >
          Billing
        </li>
      </ul>
      <div style={contentStyle}>
        {activeMenu === "orders" && (
          <Orders orders={orders} onRepeatOrder={handleRepeatOrder} />
        )}
        {activeMenu === "wishlist" && <WishList items={orders} />}
        {activeMenu === "settings" && (
          <AccountSettings
            user={userData}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleSignOut}
          />
        )}
        {activeMenu === "billing" && (<div><Billing/> import React, { useState } from 'react';

const BillingInformation = () => {
  const [billingInfo, setBillingInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save data (e.g., to local storage or backend)
    console.log('Billing info saved:', billingInfo);
  };

  return (
    <div className="billing-info-container">
      <h2>Billing Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleInputChange}
            required
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={billingInfo.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleInputChange}
            maxLength="3"
            required
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Details
        </button>
        {/* Add a button to allow users to edit the information */}
      </form>
      <style jsx>{`
        .billing-info-container {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
        /* Add more styles as needed */
      `}</style>
    </div>
  );
};

export default BillingInformation;
</div> )}
      </div>
    </div>
  );
};

export default UserDashboard;