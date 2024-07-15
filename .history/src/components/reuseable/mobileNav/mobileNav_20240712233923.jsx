import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useCallback, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
export default function MobileNav() {
  const [value, setValue] = useState(0);
  useCallback
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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Shop" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
        <BottomNavigationAction label="Info" icon={<InfoIcon/>} />
      </BottomNavigation>
    </Paper>
  );
}
