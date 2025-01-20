import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const CheckoutButton = () => {
  const router = useNavigate();
  const handleCartNavigate = () => {
    router("/cart");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        width: "-webkit-fill-available",
        display: { xs: "block", sm: "none" },
      }}
    >
      <Button
        variant="contained"
        color="success"
        sx={{
          margin: "8px",
          width: "-webkit-fill-available",
          borderRadius: "50px",
          background: "#15741a",
          padding: "8px 16px",
        }}
        onClick={handleCartNavigate}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};
