import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import FilterBar from "../generic-component/card/FilterBar.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";

export const Identifier = ({}) => {
  const { slug } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (slug) {
      const loadCategoryData = async () => {
        try {
          const result = await fetchData(
            endpoints.getAllProductsIdentifier + slug
          );
          setCategoryData(result?.list);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadCategoryData();
    }
  }, [slug]);

  return (
    <div>
      <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
        <Typography variant="h4" sx={{ margin: "2rem" }}>
          Identifier
        </Typography>
      </Grid>
      <Box sx={{ background: "#f3f3f3", padding: "1rem" }}>
        <Grid container item md={11} sx={{ margin: "auto" }}>
          <FilterBar />
        </Grid>

        <Grid container item md={11} sx={{ margin: "auto" }}>
          {categoryData?.length > 0
            ? categoryData?.map((data, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ margin: "auto", padding: "0.5rem" }}
                >
                  <ProductCard data={data} />
                </Grid>
              ))
            : Array.from({ length: 8 }).map((_, i) => (
                <Box key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      margin: "0.5rem",
                      width: "320px",
                      height: "370px",
                    }}
                  />
                </Box>
              ))}
        </Grid>
      </Box>
    </div>
  );
};
