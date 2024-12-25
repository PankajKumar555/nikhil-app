import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const UpIcon = () => {
  const handlePageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling
    });
  };

  return (
    <Box
      onClick={handlePageUp}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "white",
        width: "3rem",
        height: "3rem",
        zIndex: 1000,
        borderRadius: "100%",
        display: { xs: "none", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      <KeyboardArrowUpIcon
        sx={{
          color: "green",
          fontSize: "45px",
        }}
      />
    </Box>
  );
};
