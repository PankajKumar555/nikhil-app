import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Divider,
  FormControl,
  InputBase,
  Select,
  Typography,
} from "@mui/material";
import "./index.css";

export default function Sort() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Sort by :</Typography>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={age}
            onChange={handleChange}
            // displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            input={
              <InputBase
                sx={{
                  border: "none",
                  //   "&:before": { borderBottom: "none" },
                  //   "&:after": { borderBottom: "none" },
                }}
              />
            }
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>low to high</MenuItem>
            <MenuItem value={20}>high to low</MenuItem>
            <MenuItem value={30}>A to Z</MenuItem>
            <MenuItem value={30}>Z to A</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
      </div>
    </Box>
  );
}
