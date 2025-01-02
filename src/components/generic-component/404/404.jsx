import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: 4,
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: "6rem",
            color: "#ff6f61",
            marginBottom: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#555",
            marginBottom: 3,
            fontSize: "1.5rem",
          }}
        >
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#777",
            marginBottom: 4,
          }}
        >
          It seems you’ve hit a broken link or the page has been moved. Let’s
          get you back to safety.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={goHome}
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
