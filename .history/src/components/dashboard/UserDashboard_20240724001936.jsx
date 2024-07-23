/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import WishList from "./WishList";
import AccountSettings from "./AccountSettings";
import Billing from "./Billing";
import useWidthSize from "../reuseable/width/useWidthSize";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import MapIcon from "@mui/icons-material/Map";
import { toaster } from "evergreen-ui";
import { auth, db } from "../../../server/firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { userCartList, userInfo,  userOrdersItems,  userWishlist } from "../../store/actions/userActions";
import { collection, getDocs, query, where } from "firebase/firestore";
const UserDashboard = ({name}) => {
  const [activeMenu, setActiveMenu] = useState("orders");
  const { session } = useSelector((state) => state.user);
  const { userData} = useSelector(state => state.user)
  const wishlistRef = useRef([]);
  wishlistRef.current = userData ? userData[0]?.wishlist : [];
  console.log(session?.email)
  const [ordersItem, setOrders] = useState([]);
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { width } = useWidthSize();
  useEffect(() => {
    if (name) {
      if(window.location.pathname === "/log/wishlist"){
        setActiveMenu("wishlist")
      }else{
        setActiveMenu(name);
      }
    }
  }, [name]);

  const fet = useCallback(
    () => {
      if (userData) {
        dispatch(userOrdersItems(setOrders, userData[0]?.user_name));
      }
    },
    [dispatch, userData],
  )
  useEffect(() => {
    fet()
  }, [fet])
  
  useCallback(() => {
    if (name) {
      if (window.location.pathname === "/log/wishlist") {
        setActiveMenu("wishlist");
      } else {
        setActiveMenu(name);
      }
    }
  }, [name]);

  console.log(ordersItem)
  const orders = ordersItem
 
  const handleUpdateUser = (updatedUser) => {
    // Update user logic here
    console.log("Updated User:", updatedUser);
    dispatch(userInfo(updatedUser, userData[0]?.user_name));
   
  };
  const handleSignOut = async() => {
    try {
      await signOut(auth)
      navigate("/log")
      toaster.success("Signed Out Successfully")
      console.log("User signed out");
    } catch (error) {
      toaster.danger(error.message)
    }
    // Sign out logic here
  };

  const handleRemoveWishlist = (id) => {
     const existingIndex = wishlistRef.current.findIndex(
       (existingItem) => existingItem.id === id
     );

     if (existingIndex !== -1) {
       // Item is already in the wishlist, remove it
       wishlistRef.current.splice(existingIndex, 1);
       dispatch(userWishlist(wishlistRef.current, userData[0].user_name));
       toaster.success("Removed from wishlist");
     } 
  }
  // In your component render

  const handleRepeatOrder = (orderCart) => {
    // Logic to handle repeating an order
    // This could involve adding the items from the order back into the cart, for example
    dispatch(userCartList(orderCart, userData[0].user_name));
    navigate
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
          sx={{ position: "sticky", top: 70, left: 0, right: 0 }}
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
        {activeMenu === "wishlist" && <WishList items={wishlistRef.current} onRemoveItem={handleRemoveWishlist}/>}
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