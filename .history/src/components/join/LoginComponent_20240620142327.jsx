/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  backgroundColor: "#f9f9f9",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  width: "45%",
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
  cursor: 'pointer',
};

const textStyle = {
  fontSize: "12px",
  color: "#757575",
  marginTop: "15px",
};

function LoginComponent({ handleChain }) {
  const [userData, setUserData] = useState([]) 
   async function fet(){
    try {
       const data =  axios.get(`http://localhost:5000/users`);
  
    setUserData(data.data)
    } catch (error) {
      console.lo
    }
   
  }
  useEffect(() => {
    fet()
  }, [])
  console.log(userData)
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
        <p onClick={handleChain} style={linkStyle}>
          Lost your password?
        </p>
      </form>

      <form style={formStyle}>
        <h2>Register</h2>
        <input
          type="text"
          style={inputStyle}
          placeholder="Full name *"
          required
          autoComplete=""
        />  
        <input
          type="email"
          style={inputStyle}
          placeholder="Email address *"
          required
          autoComplete=""
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password *"
          required
          autoComplete=""
        />
        <p style={textStyle}>
          A link to set a new password will be sent to your email address. Your
          personal data will be used to support your experience throughout this
          website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
      
    </div>
  );
}

export default LoginComponent;
