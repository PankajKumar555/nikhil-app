import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Welcome to Our Gifting Paradise! We believe in the joy of giving and the
        magic of thoughtful gifts.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}
          >
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              Our mission is to create memorable gifting experiences that bring
              people closer together. We curate unique gifts that cater to every
              occasion and every person, ensuring that your gifts speak from the
              heart.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}
          >
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2022, our journey began with a simple idea: to make
              gifting effortless and enjoyable. Our team is passionate about
              finding the perfect gifts that express love and appreciation, and
              we strive to ensure every gift is wrapped with care and love.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ margin: "3rem 0" }} />

      <Typography variant="h4" align="center" gutterBottom>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                margin: "0 auto",
                backgroundColor: "#1976d2",
              }}
            >
              <Typography variant="h6" color="white">
                1
              </Typography>
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Curated Selection
            </Typography>
            <Typography>
              We handpick every item in our collection, ensuring only the best
              gifts make it to you.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                margin: "0 auto",
                backgroundColor: "#1976d2",
              }}
            >
              <Typography variant="h6" color="white">
                2
              </Typography>
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Customer-Centric
            </Typography>
            <Typography>
              Your satisfaction is our priority. We go above and beyond to
              ensure a delightful shopping experience.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                margin: "0 auto",
                backgroundColor: "#1976d2",
              }}
            >
              <Typography variant="h6" color="white">
                3
              </Typography>
            </Avatar>
            <Typography variant="h5" gutterBottom>
              Fast & Reliable Shipping
            </Typography>
            <Typography>
              We ensure your gifts arrive on time, beautifully packaged and
              ready to delight.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ margin: "3rem 0" }} />

      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Join Us in Celebrating Every Moment!
        </Typography>
        <Typography paragraph>
          Follow us on our social media channels to stay updated on our latest
          offerings and gifting inspirations.
        </Typography>
        <Typography>
          Let's spread joy together—one thoughtful gift at a time!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
