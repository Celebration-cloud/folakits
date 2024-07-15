
function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Your E-commerce Site. All rights reserved.</p>
      <p>Contact us at contact@example.com</p>
    </footer>
  );
}

export default Footer;