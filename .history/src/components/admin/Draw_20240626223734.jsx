import { Divider, Drawer, IconButton, List, Typography } from '@mui/material';
import React from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Draw() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { width } = useWidthSize();
    const [outlet, setOutlet] = React.useState(0);
    const [opens, setOpens] = React.useState(false);
    const [opens1, setOpens1] = React.useState(false);
    const [opens2, setOpens2] = React.useState(false);
    menuWidth = width;
    const dashMenu = ["Customers", "Products", "Orders"];
    const subMenu = [
      ["Customer's List"],
      ["Product List", "New Product"],
      ["Order List"],
    ];
    const handleClick = (id) => {
      if (id === 0) {
        setOpens(!opens);
      }
      if (id === 1) {
        setOpens1(!opens1);
      }
      if (id === 2) {
        setOpens2(!opens2);
      }
    };
    const sect = (id) => {
      if (id === 0) {
        return opens;
      }
      if (id === 1) {
        return opens1;
      }
      if (id === 2) {
        return opens2;
      }
    };
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <Drawer variant="permanent" open={open}>

      <DrawerHeader
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Folakits Admin</Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {["Customers", "Products", "Orders"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => handleClick(index)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 && <PeopleIcon />}
                {index === 1 && <ShoppingCartIcon />}
                {index === 2 && <FolderIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              {opens ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={sect(index)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subMenu[index].map((item, idx) => (
                  <ListItemButton
                    key={idx}
                    onClick={() => {
                      setOutlet(item);
                      if (width < 500) {
                        handleClick();
                      }
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <CircleIcon sx={{ width: "10px" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Draw
