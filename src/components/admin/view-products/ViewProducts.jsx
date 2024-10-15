// ViewProducts.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     // Simulate fetching data from an API
  //     const fetchProducts = async () => {
  //       const response = await fetch("/api/products"); // Replace with your API endpoint
  //       const data = await response.json();
  //       setProducts(data);
  //     };
  //     fetchProducts();
  //   }, []);

  const handleDelete = (id) => {
    // Logic to delete product
    setProducts(products?.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product?.id}>
                <TableCell>{product?.name}</TableCell>
                <TableCell>{product?.price}</TableCell>
                <TableCell>{product?.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(product?.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewProducts;
