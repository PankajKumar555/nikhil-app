import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import { endpoints, fetchData, postData } from "../../api/apiMethod";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCartId } from "../../redux/slice/cartIdSlice";
import PhoneIcon from "@mui/icons-material/Phone";
import { currencySymbol } from "../generic-component/helper-function/HelperFunction";
import { setOrderId } from "../../redux/slice/orderIdSlice";
import { Loader } from "../admin/generic-component/mian-loader/Loader";

const Payment = ({ openPaymentdialog, handleClosePaymentDialog, cart }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    gstin: "",
  });
  const [errors, setErrors] = React.useState({});
  const [orderCartId, setOrderCartId] = React.useState();
  const [orderData, setOrderData] = React.useState();
  const [loading, setLoading] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  React.useEffect(() => {
    if (openPaymentdialog) {
      const payload = cart?.map((item) => ({
        productId: item.productId,
        noOfUnit: item.count,
        unitPrice: item.unitPrice,
      }));
      const getCartDetails = async () => {
        try {
          const result = await postData(endpoints.saveCartDetails, payload);
          setOrderCartId(result?.data);
          dispatch(setCartId(result?.data)); // Save the cartId to the Redux store
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
      getCartDetails();
    }
  }, [openPaymentdialog, cart, dispatch]);

  React.useEffect(() => {
    if (orderCartId) {
      const getCartDetails = async () => {
        try {
          const result = await fetchData(
            endpoints.getCartDetails + orderCartId
          );
          setOrderData(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
      getCartDetails();
    }
  }, [orderCartId]);

  const handleSaveOrderDetails = async () => {
    const payload = {
      cartId: orderData?.cartId,
      orderAmt: orderData?.totalAmount,
      name: formData?.name,
      email: formData?.email,
      mobile: +formData?.phone,
      address: formData?.streetAddress,
      city: formData?.city,
      state: formData?.state,
      pincode: +formData?.postalCode,
      gst: formData?.gstin,
    };
    try {
      const responce = await postData(endpoints.saveCartOrderDetails, payload);
      if (responce?.data) {
        dispatch(setOrderId(responce?.data)); // Save the cartId to the Redux store
        setLoading(false);
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Validate required fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "gstin") {
        newErrors[key] = `${key} is required`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (formData.phone.length !== 10) {
      setErrors({
        ...errors,
        phone: "Phone number must be exactly 10 digits",
      });
      return; // Prevent form submission
    }
    handleSaveOrderDetails();
    console.log("Form Submitted Successfully:", formData);
    // localStorage.removeItem("cart");
  };

  return (
    <React.Fragment>
      <Dialog
        open={openPaymentdialog}
        onClose={handleClosePaymentDialog}
        maxWidth="sm"
        fullWidth
        sx={{
          padding: "0px",
          "@media (max-width: 600px)": {
            "& .MuiDialog-paper": {
              width: "100%",
              height: "100%",
              maxHeight: "100%",
              margin: 0,
              padding: "0px",
            },
          },
        }}
        component="form"
        onSubmit={handleSubmit}
        PaperProps={{
          sx: {
            Padding: "0px",
          },
        }}
      >
        <DialogContent
          sx={{
            overflow: "auto",
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
            "&::-webkit-scrollbar": {
              display: "none" /* Chrome, Safari, and Opera */,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "end",
            }}
          >
            <IconButton onClick={handleClosePaymentDialog}>
              <CloseIcon
                sx={{
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            sx={{
              padding: "0.5rem 0px 1rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
            variant="body1"
          >
            Payment Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 0rem 5px",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }}>
              MRP Price
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {formatCurrency(
                cart?.reduce(
                  (sum, amount) => sum + amount.listPrice * amount.count,
                  0
                )
              )}
            </Typography>
          </Box>
          {cart && cart.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2px 0rem 5px",
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "500" }}>
                Total Amount
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {formatCurrency(
                  cart?.reduce(
                    (sum, amount) => sum + amount.unitPrice * amount.count,
                    0
                  )
                )}
              </Typography>
            </Box>
          ) : (
            <></>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 0rem 5px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "green" }}
            >
              Total discount
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "green" }}
            >
              -{" "}
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

          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0rem",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Amount Payable
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {currencySymbol}
              {orderData?.totalAmount}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              margin: "1rem 0px 1rem",
              textAlign: "center",
              border: "1px solid gray",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            Our representative will contact you soon for delivery and amount
            collection.
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <PhoneIcon />
              <Typography
                sx={{
                  paddingLeft: "0.5rem",
                  margin: "0.5rem 0px",
                  fontWeight: "bold",
                }}
                variant="subtitle2"
              >
                Contact Information
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              InputLabelProps={{ shrink: true }}
              sx={{
                margin: "4px auto",
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{ shrink: true }}
              sx={{
                margin: "4px auto",
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
              InputLabelProps={{ shrink: true }}
              sx={{
                margin: "4px auto",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <LocationOnIcon sx={{ width: "18px" }} />
            <Typography
              sx={{
                paddingLeft: "0.5rem",
                margin: "0.5rem 0px",
                fontWeight: "bold",
              }}
              variant="subtitle2"
            >
              Address
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            error={!!errors.streetAddress}
            helperText={errors.streetAddress}
            required
            InputLabelProps={{ shrink: true }}
            sx={{
              margin: "4px auto",
            }}
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            required
            InputLabelProps={{ shrink: true }}
            sx={{
              margin: "4px auto",
            }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
              required
              InputLabelProps={{ shrink: true }}
              sx={{ flex: 2, margin: "4px auto" }}
            />
            <TextField
              label="Postal Code"
              name="postalCode"
              type="number"
              value={formData.postalCode}
              onChange={handleChange}
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              required
              InputLabelProps={{ shrink: true }}
              sx={{ flex: 1, margin: "4px auto" }}
            />
          </Box>
          <TextField
            fullWidth
            label="Gst Number"
            name="gstin"
            value={formData.gstin}
            onChange={handleChange}
            // error={!!errors.gstin}
            // helperText={errors.gstin}
            InputLabelProps={{ shrink: true }}
            sx={{ flex: 1, margin: "4px auto" }}
          />
        </DialogContent>
        <DialogActions sx={{ margin: "0.5rem 0px" }}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                padding: "10px",
                borderRadius: "50px",
                width: { xs: "100%", sm: "50%" },
                background: "#15741a",
              }}
              color="success"
            >
              Proceed To Payment
            </Button>
          </Box>
        </DialogActions>
        {loading && <Loader />}
      </Dialog>
    </React.Fragment>
  );
};

export default Payment;
