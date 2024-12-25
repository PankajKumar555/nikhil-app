import { Box, Typography } from "@mui/material";
import React from "react";

export const NavNotification = () => {
  return (
    <Box
      sx={{
        background: "#262755",
        textAlign: "center",
        padding: "1rem",
        margin: "auto",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "white",
          display: "inline-block",
          animation: "marquee 50s linear infinite",
        }}
      >
        Best Price Guarantee on Action Figures: If you find any action figure at
        a lower price in the market, we'll not only match it but offer you ₹10
        less than the price you found *
      </Typography>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); // Start off-screen right
          }
          100% {
            transform: translateX(-100%); // End off-screen left
          }
        }
      `}</style>
    </Box>
  );
};
