/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CustomerProfile from "../admin/CustomerProfile";
import { useSelector } from "react-redux";

const AccountSettings = ({ user, onUpdateUser, onSignOut }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const { userData } = useSelector(state => state.user)
console.log(userData)
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
    onUpdateUser({ name, email });
    setEditMode(false);
  };

  return (
    <div style={containerStyle}>
      {editMode ? (
        <form style={formStyle}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            placeholder="Email"
          />
          <button type="button" style={buttonStyle} onClick={handleUpdate}>
            Update
          </button>
        </form>
      ) : (
        <>
          <CustomerProfile details={user}/>
          <button style={buttonStyle} onClick={() => setEditMode(true)}>
            Edit
          </button> 
        </>
      )}
      <button style={signOutButtonStyle} onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default AccountSettings;
