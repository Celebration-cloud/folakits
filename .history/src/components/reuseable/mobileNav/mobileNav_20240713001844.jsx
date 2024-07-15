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
  const [value, setValue] = useState(1);
  const navigate = useNavigate()
    console.log(value)
  return (
    <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={4}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => navigate(``)} label="Shop" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
        <BottomNavigationAction label="About" icon={<InfoIcon/>} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon/>} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNav;