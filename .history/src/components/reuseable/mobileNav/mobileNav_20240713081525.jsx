import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useCallback, useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function MobileNav() {
  const [value, setValue] = useState();
  if(window.location.href(`/${"Shop"}`)){
    setValue(0)
  }else if (window.location.("/contact")) {
    setValue(1);
  } else if (window.location.href("/about")) {
    setValue(2);
  } else if (window.location.href("/log")) {
    setValue(3);
  }
  const navigate = useNavigate()
    console.log(value)
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
          onClick={() => navigate(`/${"Shop"}`)}
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