import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { endpoints, fetchData } from "../../../api/apiMethod";
import { useNavigate } from "react-router";

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
  const [data, setData] = useState([]);
  const itemsPerPage = 3; // Number of items to show at once
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  useEffect(() => {
    // Fetching data when the component mounts
    const loadData = async () => {
      try {
        const result = await fetchData(endpoints.getProductIdentifier); // Replace '/items' with your actual endpoint
        console.log("indentifier----->>>>", result);
        setData(result?.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []); // Em

  const handleNavigate = (item, index) => {
    if (item?.identifierId) {
      navigate(`/identifier/${item.identifierId}`);
    } else {
      console.log("No path defined for index:", index);
    }
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
        {data?.map((item, index) => (
          <Box
            key={index}
            sx={{ padding: "1rem", width: "auto", cursor: "pointer" }}
            onClick={() => handleNavigate(item, index)}
          >
            <CircularImage src={item?.image} alt={item?.identifierName} />
            <Typography
              variant="body2"
              sx={{ marginTop: "0.5rem", textWrap: "nowrap" }}
            >
              {item?.identifierName}
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
