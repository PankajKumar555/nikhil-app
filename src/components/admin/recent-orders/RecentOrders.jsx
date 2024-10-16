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
} from "@mui/material";
import CreateOrderDialog from "./CreateOrder"; // Adjust the import path as necessary

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

const RecentOrdersTable = () => {
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
    // Add more sample orders as needed
  ];

  const [orders, setOrders] = useState(initialOrders); // Only one declaration here
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <TableContainer component={Paper}>
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
          Recent Orders
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => setDialogOpen(true)}
          sx={{ marginRight: "1rem", margin: { xs: "8px", sm: "16px" } }}
        >
          + Create Order
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Product Image</StyledTableCell>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell>Email ID</StyledTableCell>
            <StyledTableCell>Phone No.</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Payment Type</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
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
              <StyledTableCell>{order.paymentType}</StyledTableCell>
              <StyledTableCell>{order.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <CreateOrderDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreate={handleCreateOrder}
        data={null}
        flagForCreateOrder={true}
        setFlagForCreateOrder={() => {}}
      />
    </TableContainer>
  );
};

export default RecentOrdersTable;
