import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const RefundPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          Refund Policy
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for shopping with us! We value your business and want you to
          be completely satisfied with your purchase. This Refund Policy
          outlines the terms under which you can return items and receive a
          refund.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          1. Eligibility for Refund
        </Typography>
        <Typography variant="body1" paragraph>
          To be eligible for a refund, you must meet the following criteria:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="The item must be unused, in the original packaging, and in the same condition that you received it." />
          </ListItem>
          <ListItem>
            <ListItemText primary="You must initiate the return within 30 days of receiving the item." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The item must be accompanied by a receipt or proof of purchase." />
          </ListItem>
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          2. Non-Refundable Items
        </Typography>
        <Typography variant="body1" paragraph>
          Certain items are non-refundable, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Gift cards." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Personalized or custom items." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Items marked as final sale." />
          </ListItem>
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          3. Return Process
        </Typography>
        <Typography variant="body1" paragraph>
          To initiate a return, please follow these steps:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Contact our customer service team at support@example.com with your order number and reason for the return." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Once your return request is approved, you will receive instructions on how to return the item." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pack the item securely and ship it back to us within 7 days of receiving the return instructions." />
          </ListItem>
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          4. Shipping Costs for Returns
        </Typography>
        <Typography variant="body1" paragraph>
          Customers are responsible for the shipping costs associated with
          returning items. Shipping costs are non-refundable. If you receive a
          refund, the cost of return shipping will be deducted from your refund.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          5. Refund Processing Time
        </Typography>
        <Typography variant="body1" paragraph>
          Once we receive your returned item, we will inspect it and notify you
          of the approval or rejection of your refund. If approved, your refund
          will be processed, and a credit will automatically be applied to your
          original payment method within 7-10 business days, depending on your
          card issuer’s policies.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          6. Exchanges
        </Typography>
        <Typography variant="body1" paragraph>
          If you need to exchange an item for the same item, please contact us.
          If you need to exchange for a different item, you will need to return
          the item and place a new order.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          7. Damaged or Defective Items
        </Typography>
        <Typography variant="body1" paragraph>
          If you receive a damaged or defective item, please contact us within
          48 hours of receiving the item. We will provide you with a prepaid
          shipping label to return the item. Once we receive the damaged item,
          we will send you a replacement or issue a full refund.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h5" gutterBottom>
          8. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions regarding this Refund Policy, please reach
          out to our customer support team:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: support@example.com
        </Typography>
        <Typography variant="body1" paragraph>
          Phone: 1-800-555-0199
        </Typography>
      </Box>
    </Container>
  );
};

export default RefundPolicy;
