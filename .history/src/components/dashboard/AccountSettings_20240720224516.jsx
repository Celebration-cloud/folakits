/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CustomerProfile from "../admin/CustomerProfile";
import { useSelector } from "react-redux";

const AccountSettings = ({ onUpdateUser, onSignOut }) => {
  const [editMode, setEditMode] = useState(false);
  const { userData } = useSelector(state => state.user)
  const [name, setName] = useState(userData && userData[0]?.user_name);
  const [phone, setPhone] = useState(userData && userData[0]?.phone_number);
console.log(userData)
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
    <div className="flex flex-col items-center font-sans">
      {editMode ? (
        <form className="flex flex-col w-90 max-w-md">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 m-2 rounded border border-gray-300"
            placeholder="Name"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            className="p-2 m-2 rounded border border-gray-300"
            maxLength={10}
            minLength={10}
            placeholder="Phone Number"
          />
          <button
            type="button"
            onClick={handleUpdate}
            className="p-2 m-2 bg-green-500 text-white rounded cursor-pointer"
          >
            Update
          </button>
        </form>
      ) : (
        <>
          <CustomerProfile details={userData} />
          <button
            onClick={() => setEditMode(true)}
            className="p-2 m-2 bg-green-500 text-white rounded cursor-pointer"
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={onSignOut}
        className="p-2 m-2 bg-red-500 text-white rounded cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
};

export default AccountSettings;
