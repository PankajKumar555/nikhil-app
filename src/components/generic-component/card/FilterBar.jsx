import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import "./index.css";
import Availability from "./Availibility";
import Price from "./Price";
import Category from "./Category";
import Sort from "./Sort";
import FilterDrawerMobile from "./FilterDrawerMobile";
import FilterListIcon from "@mui/icons-material/FilterList";

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
  selectedSort,
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          margin: "0.5rem auto",
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
          <Sort onSort={onSort} selectedSort={selectedSort} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <IconButton onClick={() => setOpen(true)}>
          <FilterListIcon />
          <Typography variant="body1"> &nbsp; Filter & Sort</Typography>
        </IconButton>
        <FilterDrawerMobile
          handleOpen={open}
          setClose={() => setOpen(false)}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedCheckBox={selectedCheckBox}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setPriceRange={setPriceRange}
          childCategoryData={childCategoryData}
          setChlidCategoryId={setChlidCategoryId}
          setChlidCategoryName={setChlidCategoryName}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          onSort={onSort}
          selectedSort={selectedSort}
        />
      </Box>
    </>
  );
}
