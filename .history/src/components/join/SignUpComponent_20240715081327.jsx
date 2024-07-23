
function SignUpComponent() {
  return (
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
  );
}

export default SignUpComponent
