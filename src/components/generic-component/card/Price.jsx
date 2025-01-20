import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider, FormControl, Select, Typography } from "@mui/material";

export default function Price({ minPrice, maxPrice, setPriceRange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const handleReset = () => {
    setPriceRange({ min: null, max: 10000 });
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          sx={{
            color: "#000",
            margin: "auto 0.5rem",
            textTransform: "capitalize",
          }}
        >
          Price <ExpandMoreIcon sx={{ color: "#000", fontSize: "20px" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Typography
            variant="body2"
            onClick={handleReset}
            sx={{
              textAlign: "right",
              padding: "0.5rem 1rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Reset
          </Typography>
          <Divider />
          <Box
            sx={{
              margin: "1rem auto",
              justifyContent: "space-evenly",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={minPrice}
                onChange={handleMinChange}
                displayEmpty
                inputProps={{ "aria-label": "Min Price" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: "125px", // Set the width of the dropdown
                      // left: "230px !important",
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Min</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={2000}>2000</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={maxPrice}
                onChange={handleMaxChange}
                displayEmpty
                inputProps={{ "aria-label": "Max Price" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: "125px", // Set the width of the dropdown
                      // left: "367px !important",
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Max</em>
                </MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={5000}>5000</MenuItem>
                <MenuItem value={10000}>10000</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Menu>
      </div>
    </Box>
  );
}
