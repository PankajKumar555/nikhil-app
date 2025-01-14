import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Divider,
  FormControlLabel,
  InputBase,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FilterDrawerMobile = ({
  handleOpen,
  setClose,
  selectedOption,
  selectedCheckBox,
  setSelectedOption,
  minPrice,
  maxPrice,
  setPriceRange,
  childCategoryData,
  setChlidCategoryId,
  setChlidCategoryName,
  selectedCategory,
  setSelectedCategory,
  onSort,
  selectedSort,
}) => {
  const [openSection, setOpenSection] = useState(null);
  //   const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (event) => {
    const value = event.target.value;
    // setSelectedSort(value); // Update local state
    onSort(value); // Notify parent component or perform sorting
  };

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOption(name);
      selectedCheckBox(name);
    } else {
      setSelectedOption("");
      selectedCheckBox(null);
    }
  };

  const handleMinChange = (event) => {
    const newMin = event.target.value;
    if (newMin < maxPrice) {
      setPriceRange((prev) => ({ ...prev, min: newMin }));
    } else {
      alert("You can't choose min price greater than max price.");
    }
  };

  const handleMaxChange = (event) => {
    const newMax = event.target.value;
    if (newMax > minPrice) {
      setPriceRange((prev) => ({ ...prev, max: newMax }));
    } else {
      alert("You can't choose max price less than min price.");
    }
  };

  const handleSelectChildCategory = (e, item) => {
    e.preventDefault();
    setSelectedCategory(item?.categoryId);
    setChlidCategoryId(item?.categoryId);
    setChlidCategoryName(item?.categoryName);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        {/* Availability Section */}
        <ListItem>
          <ListItemButton onClick={() => handleToggleSection("availability")}>
            <ListItemText primary="Availability" />
            {openSection === "availability" ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openSection === "availability"}
          timeout="auto"
          unmountOnExit
        >
          <Box sx={{ paddingLeft: 2 }}>
            <ListItem>
              <Checkbox
                name="inStock"
                checked={selectedOption === "inStock"}
                onChange={handleCheckboxChange}
              />
              <ListItemText primary="In Stock" />
            </ListItem>
            <ListItem>
              <Checkbox
                name="outOfStock"
                checked={selectedOption === "outOfStock"}
                onChange={handleCheckboxChange}
              />
              <ListItemText primary="Out of Stock" />
            </ListItem>
          </Box>
        </Collapse>
        <Divider />

        {/* Price Section */}
        <ListItem>
          <ListItemButton onClick={() => handleToggleSection("price")}>
            <ListItemText primary="Price" />
            {openSection === "price" ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openSection === "price"}
          timeout="auto"
          unmountOnExit
          sx={{ margin: "auto", width: "95%" }}
        >
          <Box sx={{ paddingLeft: 2 }}>
            <FormControl fullWidth sx={{ mb: 2, width: "94%" }}>
              <Typography variant="body2">Min Price</Typography>
              <Select
                value={minPrice}
                onChange={handleMinChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: "125px",
                      background: "#f3f3f3",
                    },
                  },
                }}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="10000">10000</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: "94%" }}>
              <Typography variant="body2">Max Price</Typography>
              <Select
                value={maxPrice}
                onChange={handleMaxChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: "125px",
                      background: "#f3f3f3",
                    },
                  },
                }}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="10000">10000</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Collapse>
        <Divider />

        {/* Category Section */}
        <ListItem>
          <ListItemButton onClick={() => handleToggleSection("category")}>
            <ListItemText primary="Category" />
            {openSection === "category" ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openSection === "category"} timeout="auto" unmountOnExit>
          <Box sx={{ paddingLeft: 2 }}>
            {childCategoryData?.length > 0 ? (
              childCategoryData?.map((item, index) => (
                <MenuItem key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategory === item?.categoryId}
                        onChange={(e) => handleSelectChildCategory(e, item)}
                      />
                    }
                    label={item?.categoryName}
                  />
                </MenuItem>
              ))
            ) : (
              <Typography
                variant="body1"
                sx={{ textAlign: "center", margin: "1rem auto" }}
              >
                No Category found
              </Typography>
            )}
          </Box>
        </Collapse>
        <Divider />

        {/* Sort Section */}
        <ListItem>
          <ListItemButton onClick={() => handleToggleSection("sort")}>
            <ListItemText primary="Sort" />
            <Box sx={{ paddingLeft: 2 }}>
              <FormControl fullWidth>
                <Select
                  value={selectedSort} // Bind the selected value to the "sort" state
                  onChange={handleSortChange} // Update the sort state on selection
                  input={<InputBase sx={{ border: "none" }} />}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        width: "250px", // Set the width of the dropdown
                        top: "270px !important",
                        background: "#f3f3f3",
                      },
                    },
                  }}
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="lowToHigh">Low to High</MenuItem>
                  <MenuItem value="highToLow">High to Low</MenuItem>
                  <MenuItem value="aToZ">A to Z</MenuItem>
                  <MenuItem value="zToA">Z to A</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItemButton>
        </ListItem>
        {/* <Collapse in={openSection === "sort"} timeout="auto" unmountOnExit> */}

        {/* </Collapse> */}

        <Divider />
      </List>
    </Box>
  );

  return (
    <Drawer open={handleOpen} onClose={setClose} anchor="right">
      {DrawerList}
    </Drawer>
  );
};

export default FilterDrawerMobile;
