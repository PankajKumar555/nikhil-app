import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { data } from "../../dummy-data/DummyData.js";
import ProductCard from "../generic-component/card/ProductCard.jsx";

export const RelatedProducts = () => {
  return (
    <Box sx={{ width: "100%", margin: "2rem 0px" }}>
      <Typography variant="h4" sx={{ margin: "1rem 0px" }}>
        Related Products
      </Typography>
      <Box>
        <Grid container item md={12} sx={{ margin: "auto" }}>
          {data.map((data, index) => (
            <Grid
              key={index}
              item
              md={3}
              sx={{ margin: "auto", padding: "0.5rem" }}
              // onClick={() => handleNavigate(index)}
            >
              <ProductCard
                url={data.imageUrl}
                heading={data.name}
                price={data.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
