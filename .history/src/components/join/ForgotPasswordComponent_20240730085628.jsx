import { useState } from "react";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = 
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    height: "100%", // Adjust as needed
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px", // Adjust as needed
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "20px 0",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here

  };

  return (
    <div style={containerStyle}>
      <h2>Lost your password?</h2>
      <p>
        Please enter your username or email address. You will receive a link to
        create a new password via email.
      </p>
      <form style={formStyle} onSubmit={handleResetPassword}>
        <input
          type="text"
          style={inputStyle}
          placeholder="Username or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>
          Reset password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordComponent;
