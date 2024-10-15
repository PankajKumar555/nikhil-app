// PendingOrders.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     // Simulate fetching data from an API
  //     const fetchOrders = async () => {
  //       const response = await fetch("/api/orders/pending"); // Replace with your API endpoint
  //       const data = await response.json();
  //       setOrders(data);
  //     };
  //     fetchOrders();
  //   }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Pending Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order?.id}>
                <TableCell>{order?.id}</TableCell>
                <TableCell>{order?.customerName}</TableCell>
                <TableCell>{order?.totalAmount}</TableCell>
                <TableCell>{order?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PendingOrders;
