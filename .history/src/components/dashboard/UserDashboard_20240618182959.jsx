import React from "react";

const UserDashboard = () => {
  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const headerStyle = {
    backgroundColor: "#fff",
    width: "100%",
    padding: "20px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  };

  const titleStyle = {
    color: "#333",
    textAlign: "center",
    fontWeight: "300",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "20px",
    width: "300px", // Adjust as needed
    textAlign: "center",
  };

  const cardTitleStyle = {
    margin: "10px 0",
    fontWeight: "500",
  };

  const cardContentStyle = {
    color: "#666",
  };

  return (
    <div style={dashboardStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Welcome to Your Dashboard</h1>
      </header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Orders</h2>
          <p style={cardContentStyle}>
            View your recent orders and manage returns.
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Wishlist</h2>
          <p style={cardContentStyle}>
            See all the items you've saved for later.
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Account Settings</h2>
          <p style={cardContentStyle}>
            Update your profile, payment methods, and address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
