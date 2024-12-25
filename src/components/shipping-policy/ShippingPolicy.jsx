import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ShippingPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Shipping Policy
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Our goal is to ensure your order is delivered to you in a timely and
          efficient manner. Below are the details of our shipping policy.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          1. Shipping Methods
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Standard Shipping"
              secondary="5-7 business days"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Expedited Shipping"
              secondary="2-3 business days"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Next-Day Shipping"
              secondary="1 business day"
            />
          </ListItem>
        </List>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          2. Shipping Rates
        </Typography>
        <Typography paragraph>
          Shipping rates are calculated based on the weight of your order and
          the delivery location. You can view your shipping costs at checkout.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          3. Order Processing Time
        </Typography>
        <Typography paragraph>
          Orders are typically processed within 1-2 business days. You will
          receive a confirmation email once your order has shipped.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          4. International Shipping
        </Typography>
        <Typography paragraph>
          We offer international shipping to select countries. Delivery times
          and rates may vary based on your location.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          5. Tracking Your Order
        </Typography>
        <Typography paragraph>
          Once your order has shipped, you will receive a tracking number via
          email to monitor the status of your delivery.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom>
          6. Issues with Delivery
        </Typography>
        <Typography paragraph>
          If you experience any issues with your delivery, please contact our
          customer support team for assistance.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions regarding our shipping policy, please
            reach out to us at:
          </Typography>
          <Typography variant="h6" sx={{ color: "#333" }}>
            support@example.com
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ShippingPolicy;
