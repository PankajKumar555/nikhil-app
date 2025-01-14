import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: "1rem", sm: "2rem" },
        backgroundColor: "white",
        marginTop: "2rem",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Terms and Conditions
      </Typography>
      <Typography variant="h6" align="center" paragraph sx={{ color: "#555" }}>
        Welcome to our gifting website! Please read these terms and conditions
        carefully.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        1. Acceptance of Terms
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        By accessing or using our website, you agree to be bound by these terms
        and conditions. If you do not agree, please do not use our site.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        2. Products and Services
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        We strive to provide accurate descriptions of our products. However, we
        do not warrant that the product descriptions or other content is
        accurate, complete, reliable, or error-free.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        3. Orders and Payments
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        All orders are subject to acceptance and availability. Prices are
        subject to change without notice. We accept various payment methods for
        your convenience.
      </Typography>
      <List sx={{ marginBottom: "2rem" }}>
        <ListItem>
          <ListItemText
            primary="Accepted Payment Methods"
            secondary="Credit/Debit Cards, PayPal, etc."
          />
        </ListItem>
      </List>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        4. Shipping and Delivery
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        We aim to process and ship your order within [insert processing time].
        Delivery times may vary based on location. Please ensure the shipping
        address is correct to avoid delays.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        5. Returns and Refunds
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        Our return policy allows you to return items within [insert return
        period] days of receiving your order. To qualify for a refund, items
        must be unused and in original packaging.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        6. User Accounts
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        You may be required to create an account to access certain features of
        our site. You are responsible for maintaining the confidentiality of
        your account and password.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        7. Limitation of Liability
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        In no event shall our company be liable for any indirect, incidental, or
        consequential damages arising from the use of our website or products.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
        8. Changes to These Terms
      </Typography>
      <Typography paragraph sx={{ color: "#555" }}>
        We reserve the right to modify these terms and conditions at any time.
        Any changes will be effective immediately upon posting on this page.
      </Typography>

      <Divider sx={{ margin: "2rem 0" }} />

      <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#333" }}>
          Contact Us
        </Typography>
        <Typography paragraph sx={{ color: "#555" }}>
          If you have any questions about these terms and conditions, please
          contact us at:
        </Typography>
        <Typography variant="h6" sx={{ color: "#333" }}>
          support@example.com
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
