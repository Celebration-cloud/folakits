import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore"; 
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
import { toaster } from "evergreen-ui";
import { db } from "../../../server/firebase/firebaseConfig";
import { ActionTypes } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
const UserDashboard = ({name}) => {
  const [activeMenu, setActiveMenu] = useState("orders");
  const { session } = useSelector((state) => state.user);
  console.log(session?.email)
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { width } = useWidthSize();
  useEffect(() => {
    if (name) {
      setActiveMenu(name);
    }
  }, [name]);
  useCallback(() => {
    if (name) {
      setActiveMenu(name);
    }
  }, [name]);
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
  const fet = useCallback(
    async() => {
      try {
      const userCollectionRef = query(
        collection(db, "users"),
        where("email", "==", session?.email)
      );

      const unsubscribe = onSnapshot(userCollectionRef, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        dispatch({ type: ActionTypes.GET_USERS, payload: newData });
        dispatch({ type: ActionTypes.GET_CART, payload: newData?.cart  });
        dispatch({ type: ActionTypes.GET_WISHLIST, payload: newData?.WishList });
        dispatch({ type: ActionTypes.GET_ADDRESS, payload: newData?.address });
        dispatch({ type: ActionTypes.GET_ORDERS, payload: newData?.orders });

      });
      return unsubscribe
    } catch (error) {
      toaster.danger(error.message);
    }
    },
    [dispatch, session],
  )

  useEffect(() => {
    fet();

    return () => {
      fet();
    };
  }, [fet]);

  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const handleUpdateUser = (updatedUser) => {
    // Update user logic here
    console.log("Updated User:", updatedUser);
  };
  const handleSignOut = async() => {
    try {
      await signOut()
      navigate("/log")
      to
      console.log("User signed out");
    } catch (error) {
      toaster.danger(error.message)
    }
    // Sign out logic here
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
    <div>
      {width > 442 && (
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
      )}
      {width <= 442 && (
        <Paper
          sx={{ position: "sticky", top: 70, left: 0, right: 0, zIndex: 100 }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={() => {
                navigate("/log/orders"), setActiveMenu("orders");
              }}
              label="Orders"
              icon={<ListAltIcon />}
            />
            <BottomNavigationAction
              onClick={() => {
                navigate("/log/wishlist"), setActiveMenu("wishlist");
              }}
              label="Wishlist"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              onClick={() => {
                navigate("/log/settings"), setActiveMenu("settings");
              }}
              label="Setting"
              icon={<SettingsIcon />}
            />
            <BottomNavigationAction
              onClick={() => {
                navigate("/log/address"), setActiveMenu("address");
              }}
              label="Address"
              icon={<MapIcon />}
            />
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