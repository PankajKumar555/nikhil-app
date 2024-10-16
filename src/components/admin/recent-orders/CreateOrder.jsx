import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const CreateOrderDialog = ({
  open,
  onClose,
  onCreate,
  data,
  flagForCreateOrder,
  setFlagForCreateOrder,
}) => {
  const initialOrderData = {
    id: "",
    date: "",
    product_Image_Url: "",
    customerName: "",
    email: "",
    phone: "",
    address: "",
    paymentType: "",
    status: "Pending",
  };

  const [orderData, setOrderData] = useState(initialOrderData);

  // Update orderData when data prop changes
  useEffect(() => {
    if (!flagForCreateOrder && data) {
      setOrderData(data);
    } else {
      setOrderData(initialOrderData);
    }
  }, [data, flagForCreateOrder]);

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onCreate(orderData);
    handleClose();
    setOrderData(initialOrderData); // Reset to initial state
  };

  const handleClose = () => {
    onClose();
    setFlagForCreateOrder();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {flagForCreateOrder ? "Create New Order" : "Edit Order"}
      </DialogTitle>
      <DialogContent>
        {Object.keys(orderData).map((key) => (
          <TextField
            key={key}
            name={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={orderData[key]}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type={key === "date" ? "date" : "text"}
            InputLabelProps={key === "date" ? { shrink: true } : {}}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="success" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="success" variant="contained">
          {flagForCreateOrder ? "Create" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateOrderDialog;
