import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// Sample data for products
const dataStore = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "Blue Hoodie",
    code: "Hodie-B",
    color: "Blue",
    size: "M",
    price: 17.99,
    quantity: 0,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "White Hoodie",
    code: "Hodie-W",
    color: "White",
    size: "M",
    price: 35.99,
    quantity: 0,
  },
];

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    setOrders(dataStore);
  }, []);

  useEffect(() => {
    // Calculate total order whenever orders change
    const total = orders.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalOrder(total);
  }, [orders]);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  };

  const handleAdd = (item) => {
    setOrders((prevOrders) => {
      const existingOrderIndex = prevOrders.findIndex((o) => o.id === item.id);
      if (existingOrderIndex >= 0) {
        const updatedOrders = [...prevOrders];
        updatedOrders[existingOrderIndex].quantity += 1;
        return updatedOrders;
      } else {
        return [...prevOrders, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemove = (item) => {
    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== item.id));
  };

  const handleMinus = (item) => {
    setOrders((prevOrders) => {
      const existingOrderIndex = prevOrders.findIndex((o) => o.id === item.id);
      if (
        existingOrderIndex >= 0 &&
        prevOrders[existingOrderIndex].quantity > 1
      ) {
        const updatedOrders = [...prevOrders];
        updatedOrders[existingOrderIndex].quantity -= 1;
        return updatedOrders;
      }
      return prevOrders;
    });
  };

  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5">Cart ({orders.length} items)</Typography>
              {orders.map((item) => (
                // <Card key={item.id} style={{ margin: "10px 0" }}>
                <Box key={item.id}>
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "150px",
                        minWidth: "150px",
                        height: "150px",
                        marginRight: "16px",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          // flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <Typography variant="h5">{item.name}</Typography>
                          <Typography color="textSecondary" variant="body1">
                            {item.code} | {item.color} | {item.size}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #8080809e",
                            justifyContent: "center",
                            borderRadius: "4px",
                          }}
                        >
                          <Box
                            onClick={() => handleMinus(item)}
                            sx={{
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <RemoveIcon
                              sx={{ fontSize: "16px", margin: "8px" }}
                            />
                          </Box>
                          <Typography style={{ margin: "8px 16px" }}>
                            {item.quantity}
                          </Typography>
                          <Box
                            onClick={() => handleAdd(item)}
                            sx={{ cursor: "pointer" }}
                          >
                            <AddIcon sx={{ fontSize: "16px", margin: "8px" }} />
                          </Box>
                        </div>
                      </div>
                      <br />
                      <div
                        style={{
                          // flexGrow: 1,
                          display: "flex",
                          // flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "capitalize",
                            color: "black",
                            border: "1px solid #8080809e",
                            "&:hover": {
                              border: "1px solid #8080809e",
                              background: "#fff",
                            },
                          }}
                          startIcon={<DeleteForeverIcon />}
                        >
                          Remove Item
                        </Button>
                        <Box>
                          <Typography
                            style={{ marginLeft: "auto" }}
                            variant="h5"
                          >
                            {formatCurrency(item.price * item.quantity)}
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                    {/* <IconButton
                      onClick={() => handleRemove(item)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton> */}
                  </CardContent>
                  <Divider />
                </Box>
                // </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Summary</Typography>
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Total:</Typography>
                <Typography>{formatCurrency(totalOrder)}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Total:</Typography>
                <Typography>{formatCurrency(totalOrder)}</Typography>
              </Box>
              <br />
              <Divider />
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Total:</Typography>
                <Typography>{formatCurrency(totalOrder)}</Typography>
              </Box>
              <Button
                variant="contained"
                color="success"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Go To Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;

// Render the Cart component
// ReactDOM.render(
//   <Cart />,
//   document.getElementById("root")
// );
