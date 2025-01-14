import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainCard from "../generic-component/card/MainCard";
import { useNavigate } from "react-router";
import GiftItemSlider from "../generic-component/category-slider/CategorySlider.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";
import { UpIcon } from "../generic-component/up-icon/UpIcon.jsx";

export const Body = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = (item, index) => {
    if (item?.categoryId) {
      // navigate(`/categories/${item.categoryId}`);
      navigate(`/categories/${item.categoryId}`, {
        state: { categoryName: item.categoryName },
      });
    } else {
      console.log("No path defined for index:", index);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(endpoints.getAllCategories);
        setData(result?.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <Box
        sx={{
          background: "#f3f3f3",
          padding: { xs: "1rem 4px", sm: "1rem" },
        }}
      >
        <GiftItemSlider />
        <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
          <Typography variant="h4" sx={{ margin: "2rem 0px 2rem 0px" }}>
            Categories
          </Typography>
        </Grid>
        <Grid container item md={11} sx={{ margin: "auto" }}>
          {data?.length > 0
            ? data?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ margin: "", padding: "0.5rem" }}
                  onClick={() => handleNavigate(item, index)}
                >
                  <MainCard
                    key={index}
                    url={
                      item?.catImg
                        ? item.catImg
                        : "https://w0.peakpx.com/wallpaper/556/394/HD-wallpaper-warrior-katana-anime-sword-male.jpg"
                    }
                    heading={item?.categoryName}
                  />
                </Grid>
              ))
            : Array.from({ length: 8 }).map((_, i) => (
                <Box key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      margin: "0.5rem",
                      width: "320px",
                      height: "320px",
                    }}
                  />
                </Box>
              ))}
        </Grid>
      </Box>
      <UpIcon />
    </div>
  );
};
