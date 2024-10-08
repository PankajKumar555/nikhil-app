import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import "./index.css";

export default function Availability() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Filter :</Typography>
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
          Availability{" "}
          <ExpandMoreIcon sx={{ color: "#000", fontSize: "20px" }} />
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
          <MenuItem
          //    onClick={handleClose}
          >
            <FormControlLabel
              //   required
              control={<Checkbox />}
              label="In stock"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              //   required
              control={<Checkbox />}
              label="Out of stock"
            />
          </MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
