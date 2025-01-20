import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { useParams } from "react-router";
import { endpoints, fetchData } from "../../api/apiMethod";
import { UpIcon } from "../generic-component/up-icon/UpIcon";
import { CheckoutButton } from "../admin/generic-component/confirm-dialog/CheckoutButton";

export const Product = () => {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    if (slug) {
      const loadCategoryData = async () => {
        try {
          const result = await fetchData(endpoints.getProductDetails + slug);
          setProductDetails(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadCategoryData();
    }
  }, [slug]);

  return (
    <Box>
      <ImageSlider productDetails={productDetails} />
      <UpIcon />
      <CheckoutButton />
    </Box>
  );
};
