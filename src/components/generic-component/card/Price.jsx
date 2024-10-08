import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Divider,
  FormControl,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import "./index.css";

export default function Price() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <Typography variant="body1">Filter :</Typography> */}
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
            onClick={handleClose}
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
          {/* <MenuItem>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </MenuItem> */}
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
                // value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Min</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>100</MenuItem>
                <MenuItem value={30}>1000</MenuItem>
                <MenuItem value={30}>2000</MenuItem>
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                // value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Max</em>
                </MenuItem>
                <MenuItem value={10}>100</MenuItem>
                <MenuItem value={20}>1000</MenuItem>
                <MenuItem value={30}>5000</MenuItem>
                <MenuItem value={30}>10000</MenuItem>
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
          </Box>
        </Menu>
      </div>
    </Box>
  );
}
