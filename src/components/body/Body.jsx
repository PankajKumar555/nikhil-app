import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MainCard from "../generic-component/card/MainCard";
import { data } from "../../dummy-data/DummyData.js";
import { useNavigate } from "react-router";

export const Body = () => {
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
      <Box sx={{ background: "#f3f3f3", padding: "1rem" }}>
        <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
          <Typography variant="h4" sx={{ margin: "2rem 0px 2rem 0px" }}>
            Categories
          </Typography>
        </Grid>
        <Grid container item md={11} sx={{ margin: "auto" }}>
          {data.map((data, index) => (
            <Grid
              key={index}
              item
              md={3}
              sx={{ margin: "auto", padding: "0.5rem" }}
              onClick={() => handleNavigate(index)}
            >
              <MainCard key={index} url={data.imageUrl} heading={data.name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
