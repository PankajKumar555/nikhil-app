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
import { setCount } from "../../redux/slice/countSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [openPaymentdialog, setOpenPaymentdialog] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(setCount(true));
  };

  const handleValueIncrease = async (item) => {
    await addToCart(item, true);
    setReloadFlag(true);
    dispatch(setCount(true));
  };

  const handleDeleteProduct = (item) => {
    const filteredCart = cart?.filter(
      (product) => product.productId !== item?.productId
    );
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setReloadFlag(true);
    dispatch(setCount(true));
  };

  const handlePayment = () => {
    setOpenPaymentdialog(true);
  };

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
                        <div
                          style={{
                            display: "flex",
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
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              style={{
                                marginLeft: "auto",
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                              variant="body1"
                            >
                              {formatCurrency(item?.listPrice * item?.count)}
                            </Typography>
                            &nbsp; &nbsp;
                            <Typography
                              style={{ marginLeft: "auto" }}
                              variant="body1"
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
                Proceed
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
