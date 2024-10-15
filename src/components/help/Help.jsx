// Help.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Help = () => {
  const helpTopics = [
    {
      title: "Shipping Information",
      description: "Learn about our shipping options and delivery times.",
      details: [
        "We offer several shipping methods to suit your needs, including Standard, Expedited, and Next-Day shipping.",
        "Standard Shipping: Typically takes 5-7 business days.",
        "Expedited Shipping: Delivered within 2-3 business days.",
        "Next-Day Shipping: Arrives the next business day.",
        "All shipping costs are calculated at checkout based on the weight and destination of your order.",
      ],
    },
    {
      title: "Returns & Exchanges",
      description: "Find out how to return or exchange an item.",
      details: [
        "You can return any unused item within 30 days of purchase for a full refund.",
        "To initiate a return, please contact our customer support team for a return authorization number.",
        "Once you receive the return label, package the item securely and ship it back to us.",
        "Exchanges can also be initiated through our customer support; items must be returned in their original condition.",
      ],
    },
    {
      title: "Account Management",
      description: "Get help with creating or managing your account.",
      details: [
        "Creating an account allows you to track orders, save shipping addresses, and manage your preferences.",
        "To create an account, click 'Sign Up' on our homepage and fill out the required information.",
        "If you forget your password, use the 'Forgot Password' link on the login page to reset it.",
        "You can update your account information by logging in and navigating to the 'Account Settings' section.",
      ],
    },
    {
      title: "Payment Issues",
      description: "Troubleshoot payment-related issues and inquiries.",
      details: [
        "We accept major credit cards, PayPal, and other secure payment methods.",
        "If your payment is declined, please check the following: ensure your card information is correct, verify that your billing address matches your bank statement, and check if your card has sufficient funds.",
        "For assistance with payment issues, contact our customer support team for detailed help.",
      ],
    },
    {
      title: "Contact Support",
      description: "Reach out to our customer support team for assistance.",
      details: [
        "If you have questions or need assistance, our customer support team is here to help.",
        "You can contact us via email at support@example.com or call us at 1-800-555-0199.",
        "Our support hours are Monday to Friday, 9 AM to 5 PM EST.",
        "For quicker responses, provide as much detail as possible about your inquiry.",
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Help Center
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Here are some resources to help you with common questions and issues.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        {helpTopics.map((topic, index) => (
          <Accordion key={index} sx={{ marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{topic.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="body1" gutterBottom>
                  {topic.description}
                </Typography>
                {topic.details.map((detail, detailIndex) => (
                  <Typography key={detailIndex} variant="body2" paragraph>
                    {detail}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Need More Help?
          </Typography>
          <Typography paragraph>
            If you have any specific questions or require further assistance,
            please don't hesitate to reach out to us.
          </Typography>
          <Button variant="contained" color="primary" href="/contact-support">
            Contact Support
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Help;
