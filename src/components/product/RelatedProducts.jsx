import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";

export const RelatedProducts = ({ productDetails }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productDetails?.relatedProducts) {
      const loadCategoryData = async () => {
        try {
          const result = await fetchData(
            endpoints.getAllRelatedProducts + productDetails?.relatedProducts
          );
          setRelatedProducts(result);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadCategoryData();
    }
  }, [productDetails]);

  return (
    <Box sx={{ width: "100%", margin: "2rem 0px" }}>
      <Typography variant="h4" sx={{ margin: "1rem 0px" }}>
        Related Products
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {relatedProducts?.list?.length > 0
            ? relatedProducts?.list?.map((data, index) => (
                <Box
                  key={index}
                  item
                  sx={{ margin: "auto", padding: "0.5rem" }}
                >
                  <ProductCard data={data} />
                </Box>
              ))
            : "No Related Products Found"}
        </Box>
      </Box>
    </Box>
  );
};
