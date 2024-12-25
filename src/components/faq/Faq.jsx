import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any unused item within 30 days of purchase for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days, depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees and times vary.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is placed, we cannot modify it. Please ensure all details are correct before completing your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other secure payment methods.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive a tracking number via email to monitor your shipment.",
    },
    {
      question: "What should I do if I receive a damaged item?",
      answer:
        "If you receive a damaged item, please contact our customer support within 48 hours for assistance.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team at support@example.com or call us at 1-800-555-0199.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          FAQ
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Have questions? We have answers! Explore our FAQs below.
        </Typography>

        <Divider sx={{ margin: "2rem 0" }} />

        {faqData.map((item, index) => (
          <Accordion key={index} sx={{ marginBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Divider sx={{ margin: "2rem 0" }} />

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Still have questions?
          </Typography>
          <Typography paragraph>
            Feel free to reach out to our support team for more assistance.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;
