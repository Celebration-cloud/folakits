import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function MobileNav() {
    const [value, setValue] = useState();
    const navigate = useNavigate()
      console.log(value, window.location.pathname)

  useEffect(() => {
    
  if(window.location.pathname === (`/${"Shop"}`)){
    setValue(0)
  }else if (window.location.pathname === ("/contact")) {
    setValue(1);
  } else if (window.location.pathname === ("/about")) {
    setValue(2);
  } else if ( window.location.pathname === "/log") {
    setValue(3);
  }else if (window.location.pathname === "/log/wishlist"){
    setValue(3);
  }else if (window.location.pathname === "/log/orders") {
    setValue(3);
  }else if (window.location.pathname === "/log/settings") {
    setValue(3);
  }else if (window.location.pathname === "/log/address") {
    setValue(3);
  }
  
  }, [])
  
  
  return (
    <Paper
      sx={{ position: "sticky", width: "100%", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => {navigate(`/${"Shop"}`), getI }}
          label="Shop"
          icon={<ShoppingBagIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/contact")}
          label="Contact"
          icon={<ContactsIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/about")}
          label="About"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/log")}
          label="Profile"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNav;