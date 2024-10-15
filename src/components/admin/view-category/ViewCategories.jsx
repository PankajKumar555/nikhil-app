// ViewCategories.js
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

const ViewCategories = () => {
  const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     // Simulate fetching data from an API
  //     const fetchCategories = async () => {
  //       const response = await fetch("/api/categories"); // Replace with your API endpoint
  //       const data = await response.json();
  //       setCategories(data);
  //     };
  //     fetchCategories();
  //   }, []);

  const handleDelete = (id) => {
    // Logic to delete category
    setCategories(categories?.filter((category) => category.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((category) => (
              <TableRow key={category?.id}>
                <TableCell>{category?.name}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(category.id)}
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

export default ViewCategories;
