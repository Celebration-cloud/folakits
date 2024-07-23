/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CustomerProfile from "../admin/CustomerProfile";
import { useSelector } from "react-redux";

const AccountSettings = ({ onUpdateUser, onSignOut }) => {
  const [editMode, setEditMode] = useState(false);
  const { userData } = useSelector(state => state.user)
  const [name, setName] = useState(userData[0]?.user_name);
  const [phone, setPhone] = useState(userData[0]?.email);
console.log(userData)
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save data (e.g., to local storage or backend)
    console.log("Shipping info saved:", shippingInfo);
  };
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "500px",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const signOutButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336", // Red color for sign out
  };

  // Handlers
  const handleUpdate = () => {
    onUpdateUser({ name, phone });
    setEditMode(false);
  };

  return (
    <div style={containerStyle}>
      {editMode ? (
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              style={{ backgroundColor: "white", color: "black" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              style={{ backgroundColor: "white", color: "black" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              style={{ backgroundColor: "white", color: "black" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleInputChange}
              style={{ backgroundColor: "white", color: "black" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              style={{ backgroundColor: "white", color: "black" }}
              required
            />
          </div>
          <button type="button" onClick={handleSave}>
            Save Details
          </button>
          {/* Add a button to allow users to edit the information */}
        </form>
      ) : (
        <>
          <CustomerProfile details={userData} />
          <button style={buttonStyle} onClick={() => setEditMode(true)}>
            Edit
          </button>
        </>
      )}
      <button style={signOutButtonStyle} onClick={onSignOut}>
        Sign Out
      </button>
      <style jsx>{`
        .shipping-info-container {
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

export default AccountSettings;
