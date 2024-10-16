import React from "react";
import { Grid, Paper, Typography, Icon, Box, Card } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Total Revenue
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Total Orders
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"; // Total Deals
// import TargetIcon from "@mui/icons-material/Target"; // Total Target
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Summary = () => {
  const summaryData = [
    {
      title: "Total Orders",
      value: "1,250",
      icon: <ShoppingCartIcon fontSize="large" />,
    },
    {
      title: "Total Revenue",
      value: "$25,000",
      icon: <AttachMoneyIcon fontSize="large" />,
    },
    {
      title: "Total Deals",
      value: "300",
      icon: <CardGiftcardIcon fontSize="large" />,
    },
    {
      title: "Total Target",
      value: "$30,000",
      icon: <LocalOfferIcon fontSize="large" />,
    },
  ];

  return (
    // <Grid xs={12}>
    // <Card sx={{ padding: "1rem" }}>
    <Box sx={{ display: "" }}>
      {summaryData.map((item, index) => (
        <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
          <Paper
            // elevation={3}
            style={{
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "1rem",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ marginBottom: "5px" }}
              >
                {item.title}
              </Typography>
              <Typography variant="h4" color="green">
                {item.value}
              </Typography>
            </Box>
            <Box sx={{ color: "green" }}>{item.icon}</Box>
          </Paper>
        </Grid>
      ))}
    </Box>
    // </Card>
    // </Grid>
  );
};

export default Summary;
