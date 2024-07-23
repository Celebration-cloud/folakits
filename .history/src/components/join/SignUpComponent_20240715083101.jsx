/* eslint-disable react/prop-types */

function SignUpComponent({ handleChainLogin }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: 'center',
    
    backgroundColor: "#f9f9f9",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    width: "100%",
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

//   const textStyle = {
//     fontSize: "12px",
//     color: "#757575",
//     marginTop: "15px",
//   };
  return (
    <div style={containerStyle}>
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
      <p onClick={handleChainLogin} style={linkStyle}>
        Already have an account?, log in
      </p>
      <button type="submit" style={buttonStyle}>
        Register
      </button>
    </form>
    </div>
    
  );
}

export default SignUpComponent
