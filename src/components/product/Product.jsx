import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { useNavigate, useParams } from "react-router";
import { endpoints, fetchData } from "../../api/apiMethod";

export const Product = () => {
  // const navigate = useNavigate();
  const { slug } = useParams();
  // console.log("slugproduct----", slug);

  const [productDetails, setProductDetails] = useState([]);
  // console.log("productDetails-----", productDetails);

  useEffect(() => {
    if (slug) {
      const loadCategoryData = async () => {
        try {
          const result = await fetchData(endpoints.getProductDetails + slug);
          // console.log("result-----", result);
          setProductDetails(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadCategoryData();
    }
  }, [slug]); // Re-run when the slug changes
  return (
    <Box>
      <ImageSlider productDetails={productDetails} />
    </Box>
  );
};
