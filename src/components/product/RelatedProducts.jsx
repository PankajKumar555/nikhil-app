import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { data } from "../../dummy-data/DummyData.js";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";

export const RelatedProducts = ({ productDetails }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  // console.log("relatedProducts-----", relatedProducts);

  useEffect(() => {
    if (productDetails) {
      const loadCategoryData = async () => {
        try {
          const result = await fetchData(
            endpoints.getAllRelatedProducts + productDetails?.relatedProducts
          );
          // console.log("resultRelated-----", result);
          setRelatedProducts(result);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadCategoryData();
    }
  }, [productDetails]); // Re-run when the slug changes

  return (
    <Box sx={{ width: "100%", margin: "2rem 0px" }}>
      <Typography variant="h4" sx={{ margin: "1rem 0px" }}>
        Related Products
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex", // Use flexbox for horizontal layout
            overflowX: "auto", // Enable horizontal scrolling
            // padding: "1rem", // Optional: add padding
            // gap: "1rem", // Optional: space between items
            "&::-webkit-scrollbar": {
              // Hide the scrollbar for Webkit-based browsers
              display: "none",
            },
            msOverflowStyle: "none", // Hide scrollbar for IE and Edge
            scrollbarWidth: "none",
          }}
        >
          {relatedProducts?.list?.map((data, index) => (
            <Grid
              key={index}
              item
              // md={3}
              sx={{ margin: "auto", padding: "0.5rem" }}
              // onClick={() => handleNavigate(index)}
            >
              <ProductCard data={data} />
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
