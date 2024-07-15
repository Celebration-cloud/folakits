/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import WishList from "./WishList";
import AccountSettings from "./AccountSettings";
import Billing from "./Billing";
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import useWidthSize from "../reuseable/width/useWidthSize";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import MapIcon from "@mui/icons-material/Map";
const UserDashboard = ({name}) => {
  const [activeMenu, setActiveMenu] = useState("orders");
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  const {width} = useWidthSize()
  useEffect(() => {
    if(name){
      setActiveMenu(name)
    }
  }, [name])
  useCallback(
    () => {
      if (name) {
        setActiveMenu(name);
      }
    },
    [name],
  )
  const products = [
    {
      name: "Baby shoes",
      img: [img1, img3],
      description:
        "Morbi vitae sem. Suspendisse ac augue varius nunc ac turpis libero, consectetuer tincidunt, mi mauris, consectetuer lectus. Aenean bibendum. In lacinia eget, pede. Cras tempus erat. Sed sollicitudin posuere, nibh faucibus quis, ipsum.",
      price: "$11.00",
      originalPrice: "$16.00",
      category: "Accessories",
      onSale: true,
    },
    {
      name: "Baby Socks",
      img: [img2],
      description:
        "Morbi vitae sem. Suspendisse ac augue varius nunc ac turpis libero, consectetuer tincidunt, mi mauris, consectetuer lectus. Aenean bibendum. In lacinia eget, pede. Cras tempus erat. Sed sollicitudin posuere, nibh faucibus quis, ipsum.",
      price: "$15.00",
      originalPrice: "$19.00",
      category: "Accessories",
      onSale: false,
    },
    {
      name: "Bear boots",
      img: [img3],
      description:
        "Morbi vitae sem. Suspendisse ac augue varius nunc ac turpis libero, consectetuer tincidunt, mi mauris, consectetuer lectus. Aenean bibendum. In lacinia eget, pede. Cras tempus erat. Sed sollicitudin posuere, nibh faucibus quis, ipsum.",
      price: "$25.00",
      originalPrice: "$28.00",
      category: "Accessories",
      onSale: true,
    },
    {
      name: "Cardigan longsleeve",
      img: [img1],
      description:
        "Morbi vitae sem. Suspendisse ac augue varius nunc ac turpis libero, consectetuer tincidunt, mi mauris, consectetuer lectus. Aenean bibendum. In lacinia eget, pede. Cras tempus erat. Sed sollicitudin posuere, nibh faucibus quis, ipsum.",
      price: "$66.00",
      category: "Accessories",
      onSale: false,
    },
    // Add more products as needed
  ];
  
  const orders = [
    {
      title: "001",
      date: "2024-06-18",
      total: 199.99,
      status: "Delivered",
      items: [
        // ... list of items
      ],
    },
    {
      title: "002",
      date: "2024-06-15",
      total: 299.99,
      status: "Shipped",
      items: [
        // ... list of items
      ],
    },
    // ... more orders
  ];
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const handleUpdateUser = (updatedUser) => {
    // Update user logic here
    console.log("Updated User:", updatedUser);
  };
  const handleSignOut = () => {
    // Sign out logic here
    console.log("User signed out");
  };

  // In your component render


   const handleRepeatOrder = (orderId) => {
     // Logic to handle repeating an order
     // This could involve adding the items from the order back into the cart, for example
     console.log(`Repeating order with ID: ${orderId}`);
     // Add logic to fetch order details and add them to cart
   };
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
      <ul style={menuStyle}>
        <li
          style={menuItemStyle("orders")}
          onClick={() => {
            navigate("/log/orders"), setActiveMenu("orders");
          }}
        >
          Orders
        </li>
        <li
          style={menuItemStyle("wishlist")}
          onClick={() => {
            navigate("/log/wishlist"), setActiveMenu("wishlist");
          }}
        >
          Wishlist
        </li>
        <li
          style={menuItemStyle("settings")}
          onClick={() => {
            navigate("/log/settings"), setActiveMenu("settings");
          }}
        >
          Account Settings
        </li>
        <li
          style={menuItemStyle("address")}
          onClick={() => {
            navigate("/log/address"), setActiveMenu("address");
          }}
        >
          Address
        </li>
      </ul>
      {width <= 400 && (
        <Paper sx={{ position: 'sticky', top: 0, left: 0, right: 0 }}>
          <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Orders" icon={<ListAltIcon/>} />
          <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Setting" icon={<SettingsIcon/>} />
          <BottomNavigationAction label="Address" icon={<MapIcon/>} />
        </BottomNavigation>
        </Paper>
        
      )}
      <div style={contentStyle}>
        {activeMenu === "orders" && (
          <Orders orders={orders} onRepeatOrder={handleRepeatOrder} />
        )}
        {activeMenu === "wishlist" && <WishList items={products} />}
        {activeMenu === "settings" && (
          <AccountSettings
            user={userData}
            onUpdateUser={handleUpdateUser}
            onSignOut={handleSignOut}
          />
        )}
        {activeMenu === "address" && (
          <div style={{ width: "100%" }}>
            <Billing />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;