import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ViewProducts from "./view-products/ViewProducts";
import ViewCategories from "./view-category/ViewCategories";
import { Dashboard } from "./dashboard/Dashboard";
import AllOrders from "./pending-order/AllOrders";
import Inventory from "./inventory/Inventory";
import { Logout } from "@mui/icons-material";

const Admin = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogout = () => {
  //   // Implement logout logic
  //   console.log("User logged out");
  // };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleListItemClick = (view) => (event) => {
    setCurrentView(view);
    toggleDrawer(false)(event); // Close the drawer
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Avatar
            onClick={handleClick}
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1409155424/photo/head-shot-portrait-of-millennial-handsome-30s-man.jpg?s=2048x2048&w=is&k=20&c=HVSX6n5e2jnyPL8vljUrwvsCvfGLQgeagBC9YrG6v1c="
          >
            {/* <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button> */}
          </Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#262d34" } }}
      >
        <List
          sx={{
            minWidth: "15rem",
            color: "#9097a7",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", margin: "1rem auto", textAlign: "center" }}
          >
            LOGO
          </Typography>
          <ListItem
            button
            onClick={handleListItemClick("dashboard")}
            sx={{
              transition: "margin-left 1s ease, color 1s ease",
              "&:hover": {
                color: "#fff",
                marginLeft: "4px",
              },
            }}
          >
            📊 &nbsp; <ListItemText primary="DashBoard" />
          </ListItem>
          <ListItem
            button
            onClick={handleListItemClick("products")}
            sx={{
              transition: "margin-left 1s ease, color 1s ease",
              "&:hover": {
                color: "#fff",
                marginLeft: "4px",
              },
            }}
          >
            🐱‍👤 &nbsp; <ListItemText primary="All Products" />
          </ListItem>
          <ListItem
            button
            onClick={handleListItemClick("categories")}
            sx={{
              transition: "margin-left 1s ease, color 1s ease",
              "&:hover": {
                color: "#fff",
                marginLeft: "4px",
              },
            }}
          >
            📋 &nbsp; <ListItemText primary="All Categories" />
          </ListItem>
          <ListItem
            button
            onClick={handleListItemClick("orders")}
            sx={{
              transition: "margin-left 1s ease, color 1s ease",
              "&:hover": {
                color: "#fff",
                marginLeft: "4px",
              },
            }}
          >
            📝 &nbsp; <ListItemText primary="All Orders" />
          </ListItem>
          <ListItem
            button
            onClick={handleListItemClick("inventory")}
            sx={{
              transition: "margin-left 1s ease, color 1s ease",
              "&:hover": {
                color: "#fff",
                marginLeft: "4px",
              },
            }}
          >
            📦 &nbsp; <ListItemText primary="Inventory" />
          </ListItem>
        </List>
      </Drawer>

      <Grid
        container
        // spacing={3}
        sx={{
          padding: {
            xs: "8px",
            sm: "20px",
          },
        }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "products" && <ViewProducts />}
        {currentView === "categories" && <ViewCategories />}
        {currentView === "orders" && <AllOrders />}
        {currentView === "inventory" && <Inventory />}
      </Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        // onClose={handleClose}
        // onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Admin;
