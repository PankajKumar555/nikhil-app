// Testimonial.js
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import { Star } from "@mui/icons-material";

const testimonials = [
  {
    name: "John Doe",
    text: "This service is fantastic! It has transformed the way we do business.",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Absolutely love the team! They went above and beyond to help us.",
    avatar: "https://via.placeholder.com/100",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    text: "Highly recommend! The quality of service is top-notch.",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "An outstanding experience from start to finish!",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "Emily White",
    text: "Professional, efficient, and very friendly. Will definitely use again.",
    avatar: "https://via.placeholder.com/100",
    rating: 4,
  },
  {
    name: "David Black",
    text: "A true partner in our business journey. Highly recommended!",
    avatar: "https://via.placeholder.com/100",
    rating: 5,
  },
];

const Review = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Clients Say
        </Typography>
        <Divider sx={{ marginBottom: 4 }} />
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    sx={{ width: 64, height: 64, marginBottom: 2 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: "#FFD700" }} />
                    ))}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="right"
                    sx={{ marginTop: 2 }}
                  >
                    - {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
