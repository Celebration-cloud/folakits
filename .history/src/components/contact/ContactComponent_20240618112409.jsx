// ContactComponent.js
import React from "react";

const contactInfoStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f2f2f2",
  // Add more styles as needed
};

const messageFormStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  // Add more styles as needed
};

const ContactComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={contactInfoStyle}>
        <div>
          <p>
            <strong>Phone:</strong> +61 (0) 3 8376 6284
          </p>
          <p>
            <strong>Email:</strong> noreply@envato.com
          </p>
        </div>
        <div>
          <h3>Address 1</h3>
          <p>Street name here</p>
          <p>City code, City name</p>
        </div>
        <div>
          <h3>Address 2</h3>
          <p>Another street name here</p>
          <p>City code, City name</p>
        </div>
      </div>
      <div style={messageFormStyle}>
        <h3>Send us a message</h3>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            style={{ margin: "10px 0" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ margin: "10px 0" }}
          />
          <input
            type="text"
            placeholder="Subject"
            style={{ margin: "10px 0" }}
          />
          <textarea
            placeholder="Your Message"
            style={{ margin: "10px 0" }}
          ></textarea>
          <button type="submit" style={{ margin: "10px 0" }}>
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
