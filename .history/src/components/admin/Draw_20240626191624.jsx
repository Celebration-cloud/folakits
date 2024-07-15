import React from 'react'

function Draw() {
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
