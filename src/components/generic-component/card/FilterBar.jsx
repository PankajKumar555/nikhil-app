import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider, Typography } from "@mui/material";
import "./index.css";
import Availability from "./Availibility";
import Price from "./Price";
import Category from "./Category";
import Sort from "./Sort";
import CloseIcon from "@mui/icons-material/Close";

export default function FilterBar({
  selectedCheckBox,
  minPrice,
  maxPrice,
  setPriceRange,
  childCategoryData,
  setChlidCategoryId,
  onSort,
}) {
  // console.log("categoryData-----", categoryData);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          margin: "1rem auto 0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Availability selectedCheckBox={selectedCheckBox} />
          <Price
            minPrice={minPrice}
            maxPrice={maxPrice}
            setPriceRange={setPriceRange}
          />
          <Category
            childCategoryData={childCategoryData}
            setChlidCategoryId={setChlidCategoryId}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Sort onSort={onSort} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0.5rem 0px 1rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            border: "1px solid gray",
            borderRadius: "5rem",
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          Category: exaple &nbsp;
          <CloseIcon sx={{ fontSize: "16px" }} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: "0px 1rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Remove All
        </Typography>
      </Box>
    </>
  );
}
