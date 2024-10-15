// PrivacyPolicy.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Privacy Policy</Typography>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We value your privacy and are committed to protecting your personal
          information.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We collect various types of information in order to provide you with
          an exceptional shopping experience:
        </Typography>
        <List sx={{ marginBottom: "2rem" }}>
          <ListItem>
            <ListItemText
              primary="Personal Information"
              secondary="Name, email address, phone number, etc."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Payment Information"
              secondary="Credit card details and billing address."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Order History"
              secondary="Records of your purchases and preferences."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Device Information"
              secondary="IP address, browser type, and operating system."
            />
          </ListItem>
        </List>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We utilize your information for various purposes, including:
        </Typography>
        <List sx={{ marginBottom: "2rem" }}>
          <ListItem>
            <ListItemText primary="Processing and fulfilling orders." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Communicating with you about your orders and inquiries." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improving our website and services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sending promotional offers and updates, if you opt-in." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Personalizing your shopping experience." />
          </ListItem>
        </List>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          3. Data Protection
        </Typography>
        <Typography paragraph>
          We implement a variety of security measures to maintain the safety of
          your personal information, including:
        </Typography>
        <List sx={{ marginBottom: "2rem" }}>
          <ListItem>
            <ListItemText primary="Encryption of sensitive information during transmission." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Regular security audits to identify vulnerabilities." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Access controls to limit data access to authorized personnel." />
          </ListItem>
        </List>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          4. Your Rights
        </Typography>
        <Typography paragraph>
          You have the following rights regarding your personal information:
        </Typography>
        <List sx={{ marginBottom: "2rem" }}>
          <ListItem>
            <ListItemText primary="Access the personal information we hold about you." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Request correction of your personal information." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Request deletion of your personal information." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Opt-out of marketing communications." />
          </ListItem>
        </List>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          5. Cookies and Tracking Technologies
        </Typography>
        <Typography paragraph>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. You can choose to accept or decline
          cookies; however, this may prevent you from taking full advantage of
          the website.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
          6. Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update our privacy policy from time to time. We will notify you
          of any changes by posting the new policy on this page.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#333" }}>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this privacy policy, please contact
            us at:
          </Typography>
          <Typography variant="h6" sx={{ color: "#333" }}>
            support@example.com
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem" }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
