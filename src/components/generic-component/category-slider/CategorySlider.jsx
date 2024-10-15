import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const CircularImage = styled("img")({
  borderRadius: "50%",
  width: "55px", // Adjust size as needed
  height: "55px", // Adjust size as needed
  objectFit: "cover",
  margin: "0 auto", // Center the image
});

const items = [
  {
    image: "https://via.placeholder.com/100",
    name: "Gift Item 1",
  },
  {
    image: "https://via.placeholder.com/100",
    name: "Gift Item 2",
  },
  {
    image: "https://via.placeholder.com/100",
    name: "Gift Item 3",
  },
  {
    image: "https://via.placeholder.com/100",
    name: "Gift Item 4",
  },
  {
    image: "https://via.placeholder.com/100",
    name: "Gift Item 5",
  },
];

const GiftItemSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        // padding: "2rem",
        textAlign: "center",
        marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          alignItems: "center",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            // transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
            // transition: "transform 0.5s ease",
          }}
        > */}
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{ padding: "1rem", width: "auto", cursor: "pointer" }}
          >
            <CircularImage src={item.image} alt={item.name} />
            <Typography
              variant="body2"
              sx={{ marginTop: "0.5rem", textWrap: "nowrap" }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
        {/* </Box> */}
      </Box>
      {/* <Box sx={{ marginTop: "1rem" }}>
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          variant="outlined"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex >= items.length - itemsPerPage}
          variant="outlined"
          sx={{ marginLeft: "1rem" }}
        >
          Next
        </Button>
      </Box> */}
    </Box>
  );
};

export default GiftItemSlider;
