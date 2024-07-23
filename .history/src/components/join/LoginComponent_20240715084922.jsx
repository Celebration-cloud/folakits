/* eslint-disable react/prop-types */

import { useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
};



const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  backgroundColor: "white",
  color: "black",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px 0",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  marginTop: "10px",
  cursor: "pointer",
};



function LoginComponent({ handleChain, handleChainSignUp }) {
  const [userData, setUserData] = useState([]);
  const {width} = 
  //   const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const email = /* Get email from input */;
  //     const password = /* Get password from input */;

  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     // Handle successful login (redirect, update state, etc.)
  //   } catch (error) {
  //     console.error('Login error:', error.message);
  //     // Handle login error (display error message, etc.)
  //   }
  // };
const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  width: "50%",
};
  
  console.log(userData);
  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2>Login</h2>
        <input
          type="email"
          style={inputStyle}
          placeholder="Email address *"
          autoComplete=""
          required
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password *"
          required
          autoComplete=""
        />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <button type="submit" style={buttonStyle}>
          Log in
        </button>
        <p onClick={handleChainSignUp} style={linkStyle}>
          Don't have account?, sign up
        </p>
        <p onClick={handleChain} style={linkStyle}>
          Lost your password?
        </p>
      </form>
    </div>
  );
}

export default LoginComponent;
