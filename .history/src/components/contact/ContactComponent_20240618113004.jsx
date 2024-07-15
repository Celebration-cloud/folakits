// ContactComponent.js
import React from "react";

const contactInfoStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f2f2f2",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  // Add more styles as needed
};

const messageFormStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  // Add more styles as needed
};

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  cursor: "pointer",
};

const ContactComponent = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
    >
      <div style={contactInfoStyle}>{/* Contact information with icons */}</div>
      <div style={messageFormStyle}>
        <h3 style={{ textAlign: "center" }}>Send us a message</h3>
        <form style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "20px",
            
        }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <input type="text" placeholder="Subject" style={inputStyle} />
          <textarea
            placeholder="Your Message"
            style={{ ...inputStyle, height: "100px" }}
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
