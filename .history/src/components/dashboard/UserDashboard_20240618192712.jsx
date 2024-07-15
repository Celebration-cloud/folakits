import React, { useState } from "react";

const  = () => {
  const [activeMenu, setActiveMenu] = useState("orders");

  const menuStyle = {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: 0,
  };

  const menuItemStyle = (menuName) => ({
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: activeMenu === menuName ? "#ddd" : "transparent",
  });

  const contentStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };

  return (
    <div>
      <ul style={menuStyle}>
        <li
          style={menuItemStyle("orders")}
          onClick={() => setActiveMenu("orders")}
        >
          Orders
        </li>
        <li
          style={menuItemStyle("wishlist")}
          onClick={() => setActiveMenu("wishlist")}
        >
          Wishlist
        </li>
        <li
          style={menuItemStyle("settings")}
          onClick={() => setActiveMenu("settings")}
        >
          Account Settings
        </li>
      </ul>
      <div style={contentStyle}>
        {activeMenu === "orders" && (
          <div>Your orders will be displayed here.</div>
        )}
        {activeMenu === "wishlist" && (
          <div>Your wishlist will be displayed here.</div>
        )}
        {activeMenu === "settings" && (
          <div>Your account settings will be displayed here.</div>
        )}
      </div>
    </div>
  );
};

export default OrdersComponent;

// import { useState } from "react";

// const UserDashboard = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const dashboardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     minHeight: "100vh",
//     backgroundColor: "#f0f4f8",
//     fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
//     opacity: 0,
//     animation: "fadeIn 1s forwards", // Animation for dashboard fade-in
//   };

//   const headerStyle = {
//     backgroundColor: "#fff",
//     width: "100%",
//     padding: "20px 0",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     marginBottom: "30px",
//   };

//   const titleStyle = {
//     color: "#333",
//     textAlign: "center",
//     fontWeight: "300",
//   };

//   const cardStyle = {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     margin: "20px",
//     width: "300px", // Adjust as needed
//     textAlign: "center",
//     transform: "scale(0)",
//     animation: "popIn 0.5s forwards", // Animation for card pop-in
//     animationDelay: "1s", // Delay to stagger the animation of each card
//     transition: "transform 0.3s ease-in-out",
//     cursor: 'pointer',
//   };

//    const handleMouseEnter = (cardId) => {
//      setHoveredCard(cardId);
//    };

//    const handleMouseLeave = () => {
//      setHoveredCard(null);
//    };

//    const getCardStyle = (cardId) => ({
//      ...cardStyle,
//      transform: hoveredCard === cardId ? "translateY(20px)" : "none",
//      transition: "transform 0.3s ease-in-out",
//    });
//   return (
//     <div style={dashboardStyle}>
//       <header style={headerStyle}>
//         <h1 style={titleStyle}>Welcome to Your Dashboard</h1>
//       </header>
//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         <div
//           style={
//             (getCardStyle("orders"), { ...cardStyle, animationDelay: "1.2s" })
//           }
//           onMouseEnter={() => handleMouseEnter("orders")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h2 style={{ margin: "10px 0", fontWeight: "500" }}>Orders</h2>
//           <p style={{ color: "#666" }}>
//             View your recent orders and manage returns.
//           </p>
//         </div>
//         <div
//           style={
//             (getCardStyle("wishlist"), { ...cardStyle, animationDelay: "1.4s" })
//           }
//           onMouseEnter={() => handleMouseEnter("wishlist")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h2 style={{ margin: "10px 0", fontWeight: "500" }}>Wishlist</h2>
//           <p style={{ color: "#666" }}>
//             See all the items you've saved for later.
//           </p>
//         </div>
//         <div
//           style={
//             (getCardStyle("settings"),
//             {
//               ...cardStyle,
//               animationDelay: "1.6s",
//             })
//           }
//           onMouseEnter={() => handleMouseEnter("settings")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h2 style={{ margin: "10px 0", fontWeight: "500" }}>
//             Account Settings
//           </h2>
//           <p style={{ color: "#666" }}>
//             Update your profile, payment methods, and address.
//           </p>
//         </div>
//       </div>

//       {/* Add keyframes for animations */}
//       <style>{`
//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes popIn {
//           from {
//             transform: scale(0);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UserDashboard;
