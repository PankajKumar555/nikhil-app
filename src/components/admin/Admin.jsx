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
  Paper,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddCategory from "./add-category/AddCategory";
import AddProduct from "./add-product/AddProduct";
import ViewProducts from "./view-products/ViewProducts";
import ViewCategories from "./view-category/ViewCategories";
import PendingOrders from "./pending-order/PendingOrders";
import { Line } from "react-chartjs-2"; // Assuming you use chart.js for the growth graph
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Summary from "./summery/Summery";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenCategory = () => setOpenCategory(true);
  const handleCloseCategory = () => setOpenCategory(false);
  const handleOpenProduct = () => setOpenProduct(true);
  const handleCloseProduct = () => setOpenProduct(false);

  const handleLogout = () => {
    // Implement logout logic
    console.log("User logged out");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Sample data for the growth graph
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Growth",
        data: [0, 10, 5, 2, 20, 30, 45],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,0.2)",
      },
    ],
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
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1409155424/photo/head-shot-portrait-of-millennial-handsome-30s-man.jpg?s=2048x2048&w=is&k=20&c=HVSX6n5e2jnyPL8vljUrwvsCvfGLQgeagBC9YrG6v1c="
          />
          &nbsp; &nbsp;
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => setCurrentView("products")}>
            <ListItemText primary="View All Products" />
          </ListItem>
          <ListItem button onClick={() => setCurrentView("categories")}>
            <ListItemText primary="View All Categories" />
          </ListItem>
          <ListItem button onClick={() => setCurrentView("orders")}>
            <ListItemText primary="View Pending Orders" />
          </ListItem>
        </List>
      </Drawer>

      <Grid
        container
        spacing={3}
        style={{ padding: 20 }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {/* <Paper style={{ padding: 20 }}>
            <Typography variant="h5">Dashboard Summary</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper style={{ padding: 10, textAlign: "center" }}>
                  <Typography variant="h6">Total Products</Typography>
                  <Typography variant="h4">150</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={{ padding: 10, textAlign: "center" }}>
                  <Typography variant="h6">Pending Orders</Typography>
                  <Typography variant="h4">30</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={{ padding: 10, textAlign: "center" }}>
                  <Typography variant="h6">Completed Products</Typography>
                  <Typography variant="h4">120</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper> */}
          <Summary />
        </Grid>

        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h5">Growth Chart</Typography>
            <Line data={data} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            {currentView === "products" && <ViewProducts />}
            {currentView === "categories" && <ViewCategories />}
            {currentView === "orders" && <PendingOrders />}
          </Paper>
        </Grid>
      </Grid>

      <AddCategory open={openCategory} onClose={handleCloseCategory} />
      <AddProduct open={openProduct} onClose={handleCloseProduct} />
    </div>
  );
};

export default Admin;
