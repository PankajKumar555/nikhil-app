import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addToCart } from "../generic-component/helper-function/cart";
import Payment from "./Payment";
// import Payment from "./Payment";

const Cart = () => {
  const [cart, setCart] = useState([]);
  console.log("cart------", cart);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [openPaymentdialog, setOpenPaymentdialog] = useState(false);

  const getInitializeCart = () => {
    const rawCart = localStorage.getItem("cart");
    const cart = JSON.parse(rawCart);

    if (!rawCart) {
      console.log("No cart found");
      return;
    }
    setCart(cart);
    setReloadFlag(false);
  };

  useEffect(() => {
    getInitializeCart();
    // setOrders(dataStore);
  }, [reloadFlag]);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  };

  const handleValueDecrease = async (item) => {
    await addToCart(item, false);
    setReloadFlag(true);

    // e.stopPropagation();
    // const countJson = await addToCart(data, false);
    // if (countJson?.count && countJson?.count > 0) {
    //   setValue(value - 1);
    //   setIsClicked(true);
    // } else {
    //   setIsClicked(false);
    // }
  };

  const handleValueIncrease = async (item) => {
    // e.stopPropagation();
    await addToCart(item, true);
    // if (countJson?.count && countJson?.count > 0) {
    setReloadFlag(true);
    // setIsClicked(true);
    // } else {
    //   setReloadFlag(false);
    // }
  };

  const handleDeleteProduct = (item) => {
    // setOrders((prevOrders) => prevOrders.filter((o) => o.id !== item.id));
    const filteredCart = cart?.filter(
      (product) => product.productId !== item?.productId
    );
    // console.log("----filteredCart", filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setReloadFlag(true);
  };

  const handlePayment = () => {
    setOpenPaymentdialog(true);
  };

  // const handleMinus = (item) => {
  //   setOrders((prevOrders) => {
  //     const existingOrderIndex = prevOrders.findIndex((o) => o.id === item.id);
  //     if (
  //       existingOrderIndex >= 0 &&
  //       prevOrders[existingOrderIndex].quantity > 1
  //     ) {
  //       const updatedOrders = [...prevOrders];
  //       updatedOrders[existingOrderIndex].quantity -= 1;
  //       return updatedOrders;
  //     }
  //     return prevOrders;
  //   });
  // };

  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ paddingBottom: "0px !important" }}>
              <Typography variant="h5">Cart ({cart?.length} items)</Typography>
              <Box
                sx={{
                  maxHeight: "35rem",
                  overflow: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {cart?.map((item, index) => (
                  <Box key={index}>
                    <CardContent
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={item?.imageUrl}
                        alt={item?.productTitle}
                        style={{
                          width: "100px",
                          minWidth: "100px",
                          height: "100px",
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
                            <Typography variant="body1">
                              {item?.productTitle}
                            </Typography>
                            <Typography color="textSecondary" variant="body2">
                              {item?.sku}
                            </Typography>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              border: "1px solid #8080809e",
                              justifyContent: "center",
                              borderRadius: "5px",
                            }}
                          >
                            <Box
                              onClick={() => handleValueDecrease(item)}
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
                              {item?.count}
                            </Typography>
                            <Box
                              onClick={() => handleValueIncrease(item)}
                              sx={{ cursor: "pointer" }}
                            >
                              <AddIcon
                                sx={{ fontSize: "16px", margin: "8px" }}
                              />
                            </Box>
                          </div>
                        </div>
                        {/* <br /> */}
                        <div
                          style={{
                            // flexGrow: 1,
                            display: "flex",
                            // flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => handleDeleteProduct(item)}
                            sx={{
                              textTransform: "capitalize",
                              color: "black",
                              fontSize: "12px",
                              border: "1px solid #8080809e",
                              "&:hover": {
                                border: "1px solid #8080809e",
                                background: "#8080809e",
                              },
                            }}
                            startIcon={
                              <DeleteForeverIcon
                                sx={{ fontSize: "16px !important" }}
                              />
                            }
                          >
                            Remove
                          </Button>
                          <Box>
                            <Typography
                              style={{ marginLeft: "auto" }}
                              variant="h6"
                            >
                              {formatCurrency(item?.unitPrice * item?.count)}
                            </Typography>
                          </Box>
                        </div>
                      </Box>
                    </CardContent>
                    <Divider />
                  </Box>
                ))}
              </Box>
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
                <Typography>Mrp:</Typography>
                <Typography>
                  {formatCurrency(
                    cart?.reduce(
                      (sum, amount) => sum + amount.listPrice * amount.count,
                      0
                    )
                  )}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "green" }}>Discount:</Typography>
                <Typography sx={{ color: "green" }}>
                  {formatCurrency(
                    cart?.reduce(
                      (sum, amount) => sum + amount.listPrice * amount.count,
                      0
                    ) -
                      cart?.reduce(
                        (sum, amount) => sum + amount.unitPrice * amount.count,
                        0
                      )
                  )}
                </Typography>
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
                <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {formatCurrency(
                    cart?.reduce(
                      (sum, amount) => sum + amount.unitPrice * amount.count,
                      0
                    )
                  )}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="success"
                fullWidth
                style={{ marginTop: "20px" }}
                onClick={handlePayment}
              >
                Go To Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Payment
        openPaymentdialog={openPaymentdialog}
        handleClosePaymentDialog={() => setOpenPaymentdialog(false)}
        cart={cart}
      />
    </Container>
  );
};

export default Cart;

// Render the Cart component
// ReactDOM.render(
//   <Cart />,
//   document.getElementById("root")
// );
