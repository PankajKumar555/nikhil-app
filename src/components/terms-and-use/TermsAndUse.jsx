// TermsOfUse.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";

const TermsOfUse = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Terms of Use</Typography>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Use
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to our e-commerce gifting wholesale website. By accessing or
          using our services, you agree to comply with these Terms of Use. If
          you do not agree, please refrain from using our site.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By using our website, you confirm that you are at least 18 years of
          age and have the legal capacity to enter into these terms. If you are
          using our services on behalf of an organization, you represent that
          you have the authority to bind that organization.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          2. User Responsibilities
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="You agree to provide accurate and complete information when creating an account." />
          </ListItem>
          <ListItem>
            <ListItemText primary="You are responsible for maintaining the confidentiality of your account and password." />
          </ListItem>
          <ListItem>
            <ListItemText primary="You agree to notify us immediately of any unauthorized use of your account." />
          </ListItem>
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content, trademarks, and other intellectual property on this
          website are owned by us or our licensors. You may not reproduce,
          distribute, or create derivative works from any content without our
          express written permission.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          In no event shall we be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of our
          services or any information provided on our website.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          5. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which we operate, without regard to its
          conflict of law principles.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          6. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify these Terms of Use at any time. Your
          continued use of the website following any changes signifies your
          acceptance of the new terms.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          7. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms of Use, please contact us
          at:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: support@example.com
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
