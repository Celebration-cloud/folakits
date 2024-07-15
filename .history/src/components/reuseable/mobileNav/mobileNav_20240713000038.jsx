import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useCallback, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function MobileNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  useCallback(
    () => {
      if(value === 0){
          navigate(`/${'Shop'}`)
        }else if (value === 1){
          navigate('/')
      }else if(value === 3){
        navigate('/log')
      }
    },
    [navigate, value],
  )
  
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
        <BottomNavigationAction label="Shop" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
        <BottomNavigationAction label="Info" icon={<InfoIcon/>} />
        <BottomNavigationAction label="Cart" icon={<InfoIcon/>} />
        <BottomNavigationAction label="P" icon={<InfoIcon/>} />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNav;