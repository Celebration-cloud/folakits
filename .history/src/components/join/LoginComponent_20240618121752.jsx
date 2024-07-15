
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
};

const textStyle = {
  fontSize: "12px",
  color: "#757575",
  marginTop: "15px",
};

function LoginComponent() {
  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Login</h2>
        <input
          type="text"
          style={inputStyle}
          placeholder="Username or email address *"
          required
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password *"
          required
        />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <button type="submit" style={buttonStyle}>
          Log in
        </button>
        <a href="#" style={linkStyle}>
          Lost your password?
        </a>
      </div>

      <div style={formStyle}>
        <h2>Register</h2>
        <input
          type="email"
          style={inputStyle}
          placeholder="Email address *"
          required
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
      </div>
    </div>
  );
}

export default LoginComponent;
