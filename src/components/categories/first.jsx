import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { data } from "../../dummy-data/DummyData.js";
import { useNavigate } from "react-router";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import FilterBar from "../generic-component/card/FilterBar.jsx";

export const First = () => {
  const navigate = useNavigate();

  const paths = [
    "/categories/first",
    "/categories/second",
    "/categories/three",
    "/categories/four",
    "/categories/five",
    "/categories/six",
    "/categories/seven",
    "/categories/eight",
    "/categories/nine",
    "/categories/ten",
    "/categories/eleven",
    "/categories/tweleve",
  ];

  const handleNavigate = (index) => {
    if (paths[index]) {
      navigate(paths[index]);
    } else {
      console.log("No path defined for index:", index);
    }
  };
  return (
    <div>
      <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
        <Typography variant="h4" sx={{ margin: "2rem" }}>
          First
        </Typography>
      </Grid>
      <Box sx={{ background: "#f3f3f3", padding: "1rem" }}>
        <Grid container item md={11} sx={{ margin: "auto" }}>
          <FilterBar />
        </Grid>

        <Grid container item md={11} sx={{ margin: "auto" }}>
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
    </div>
  );
};
