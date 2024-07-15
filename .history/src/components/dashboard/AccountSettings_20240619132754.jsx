/* eslint-disable react/prop-types */
import { useState } from "react";

const AccountSettings = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "90%", // Adjust width as needed
    maxWidth: "500px", // Adjust max-width as needed
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
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button style={buttonStyle} onClick={() => setEditMode(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default AccountSettings;
