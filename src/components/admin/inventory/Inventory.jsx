import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
  tableCellClasses,
  TableCell,
  styled,
  IconButton,
  Grid,
} from "@mui/material";
import CreateOrderDialog from "../recent-orders/CreateOrder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "../generic-component/confirm-dialog/ConfirmDialog";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Total Revenue
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Total Orders
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"; // Total Deals
// import TargetIcon from "@mui/icons-material/Target"; // Total Target
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "green",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Inventory = () => {
  // Sample data
  const initialOrders = [
    {
      id: "001",
      date: "2023-10-10",
      product:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown",
      paymentType: "Credit Card",
      status: "Shipped",
    },
    {
      id: "002",
      date: "2023-10-11",
      product:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Othertown",
      paymentType: "PayPal",
      status: "Pending",
    },
  ];

  const summaryData = [
    {
      title: "Total Products",
      value: "1,250",
      icon: <ShoppingBagIcon fontSize="large" />,
    },
    {
      title: "In Stock",
      value: "$25,000",
      icon: <InventoryIcon fontSize="large" />,
    },
    {
      title: "Out of Stock",
      value: "300",
      icon: <ProductionQuantityLimitsIcon fontSize="large" />,
    },
    // {
    //   title: "Total Target",
    //   value: "$30,000",
    //   icon: <LocalOfferIcon fontSize="large" />,
    // },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [flagForCreateOrder, setFlagForCreateOrder] = useState(false);
  const [data, setData] = useState();
  const [orderIdToDelete, setOrderIdToDelete] = useState(null); // State for the order ID to delete

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setFlagForCreateOrder(true);
  };

  const handleCreateOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const handleDeleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    setOrderIdToDelete(null); // Reset the ID after deletion
  };

  const handleEditOrder = (item) => {
    setDialogOpen(true);
    setData(item);
  };

  const handleConfirmDelete = () => {
    handleDeleteOrder(orderIdToDelete);
    setOpenConfirmDialog(false); // Close the confirmation dialog
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography
          variant="h4"
          sx={{ margin: "1rem", color: "#808080b3", fontWeight: "bold" }}
        >
          Inventory
        </Typography>
      </Grid>
      <Grid container xs={12} margin="auto">
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
            <Paper
              // elevation={3}
              style={{
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{ marginBottom: "5px" }}
                >
                  {item.title}
                </Typography>
                <br />
                <Typography variant="h4" color="green">
                  {item.value}
                </Typography>
              </Box>
              <Box sx={{ color: "green" }}>{item.icon}</Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <TableContainer component={Paper} sx={{ margin: "1rem" }}>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ padding: { xs: "8px", sm: "16px" }, fontWeight: "600" }}
          >
            All Products
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleOpenDialog}
            sx={{ marginRight: "1rem", margin: { xs: "8px", sm: "16px" } }}
          >
            + Create Order
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Stock</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell>{order.id}</StyledTableCell>
                <StyledTableCell>{order.date}</StyledTableCell>
                <StyledTableCell>
                  <img
                    src={order.product}
                    alt="Product"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>{order.customerName}</StyledTableCell>
                <StyledTableCell>{order.email}</StyledTableCell>
                <StyledTableCell>{order.phone}</StyledTableCell>
                <StyledTableCell>{order.address}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => handleEditOrder(order)}>
                    <EditIcon sx={{ color: "green" }} />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    onClick={() => {
                      setOrderIdToDelete(order.id); // Set the order ID to delete
                      setOpenConfirmDialog(true); // Open confirmation dialog
                    }}
                  >
                    <DeleteIcon sx={{ color: "green" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <CreateOrderDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onCreate={handleCreateOrder}
          data={data}
          flagForCreateOrder={flagForCreateOrder}
          setFlagForCreateOrder={() => setFlagForCreateOrder(false)}
        />
        <ConfirmDialog
          openDialog={openConfirmDialog}
          handleClose={() => setOpenConfirmDialog(false)}
          handleDeleteOrder={handleConfirmDelete} // Use the confirmation function
        />
      </TableContainer>
    </>
  );
};

export default Inventory;
