import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useWidthSize from "../reuseable/width/useWidthSize";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Draw from "./Draw";
const drawerWidth = 240;
let menuWidth;
const openedMixin = (theme) => ({
  position: menuWidth < 700 && 'absolute',
  top: "0px",
  height: "100%",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: menuWidth < 500 ? `calc(${theme.spacing(0)} + 1px)` : `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminDashboardNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {width} = useWidthSize()
  const [outlet, setOutlet] = React.useState(0)
  const [opens, setOpens] = React.useState(false);
  const [opens1, setOpens1] = React.useState(false);
  const [opens2, setOpens2] = React.useState(false);
  menuWidth = width
  const dashMenu = ["Customers", "Products", "Orders"];
  const subMenu = [
    ["Customer's List"],
    ["Product List",  "New Product"],
    ["Order List"]
  ]
  const handleClick = (id) => {
    if(id === 0){

      setOpens(!opens);
    }
    if(id === 1){

      setOpens1(!opens1);
    }
    if(id === 2){

      setOpens2(!opens2);
    }
  };
  const sect = (id)=> {
    if (id === 0) {
      return opens
    }
    if (id === 1) {
      return opens1
    }
    if (id === 2) {
      return opens2
    }
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Folakits
          </Typography>
        </Toolbar>
      </AppBar>
      <Draw
        handleDrawerClose={handleDrawerClose}
        sect={sect}
        handleClick={handleClick}
        subMenu={subMenu}
        theme={theme}
        Drawer={Drawer}
        DrawerHeader={DrawerHeader}
        open={open}
        width={width}
        outlet={outlet}
        opens={opens}
        setOutlet={setOutlet}
      />

      {/* <Drawer variant="permanent" open={open}>
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
      </Drawer> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {outlet === "Customer's List" && (
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis vivamus at augue.
            At augue eget arcu dictum varius duis at consectetur lorem. Velit
            sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus
            et molestie ac.
          </Typography>
        )}
        {outlet === "Product List" && (
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl susc
          </Typography>
        )}
        {outlet === 2 && (
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus it vivamus at
            augue. At augue eget arcu dictum varius duis at consectetur lorem.
            Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
            faucibus et molestie ac.
          </Typography>
        )}

        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
