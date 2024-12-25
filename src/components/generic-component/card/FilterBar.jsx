import * as React from "react";
import { Box } from "@mui/material";
import "./index.css";
import Availability from "./Availibility";
import Price from "./Price";
import Category from "./Category";
import Sort from "./Sort";

export default function FilterBar({
  selectedCheckBox,
  minPrice,
  maxPrice,
  setPriceRange,
  childCategoryData,
  setChlidCategoryId,
  onSort,
  setChlidCategoryName,
  selectedCategory,
  setSelectedCategory,
  selectedOption,
  setSelectedOption,
}) {
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
          <Availability
            selectedCheckBox={selectedCheckBox}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Price
            minPrice={minPrice}
            maxPrice={maxPrice}
            setPriceRange={setPriceRange}
          />
          <Category
            childCategoryData={childCategoryData}
            setChlidCategoryId={setChlidCategoryId}
            setChlidCategoryName={setChlidCategoryName}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
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
    </>
  );
}
