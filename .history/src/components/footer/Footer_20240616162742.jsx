import { colors } from "@mui/material";
import useWidthSize from "../reuseable/width/useWidthSize";
let sections;
function Footer() {
  const {width} = useWidthSize()
  if(width)
  const footerStyle = {
    backgroundColor: "white",
    color: "#ffffff",
    textAlign: "left",
    padding: "40px",
    left: "0",
    bottom: "0",
    width: "100%",
  };

  const sectionStyle = {
    marginBottom: "20px",
    color: "black"
  };

  const headingStyle = {
    color: "black",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "grey",
    textDecoration: "none",
    display: "block", // Makes each link block-level for better spacing
    marginBottom: "5px", // Adds space between links
  };

  return (
    <footer style={footerStyle}>
      <section style={{display: "flex", width: "100%", gap: "40px"}}>
        <div style={sectionStyle}>
        <h5 style={headingStyle}>Shop</h5>
        <a href="/categories" style={linkStyle}>
          Categories
        </a>
        <a href="/new-arrivals" style={linkStyle}>
          New Arrivals
        </a>
        <a href="/sales" style={linkStyle}>
          Sales
        </a>
        <a href="/brands" style={linkStyle}>
          Brands
        </a>
      </div>

      <div style={sectionStyle}>
        <h5 style={headingStyle}>Customer Service</h5>
        <a href="/contact" style={linkStyle}>
          Contact Us
        </a>
        <a href="/faq" style={linkStyle}>
          FAQ
        </a>
        <a href="/returns" style={linkStyle}>
          Returns
        </a>
        <a href="/shipping" style={linkStyle}>
          Shipping Information
        </a>
      </div>

      <div style={sectionStyle}>
        <h5 style={headingStyle}>Follow Us</h5>
        <a href="https://www.facebook.com" style={linkStyle}>
          Facebook
        </a>
        <a href="https://www.instagram.com" style={linkStyle}>
          Instagram
        </a>
        <a href="https://www.twitter.com" style={linkStyle}>
          Twitter
        </a>
      </div>
      </section>
      

      <div style={{ ...sectionStyle, textAlign: "center" }}>
        <p>
          © {new Date().getFullYear()} Your E-commerce Site. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
