import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, FormControl, InputBase, Select, Typography } from "@mui/material";
import "./index.css";

export default function Sort({ onSort }) {
  const [value, setValue] = React.useState("none");

  const handleChange = (event) => {
    setValue(event.target.value);
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
            value={value}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            input={
              <InputBase
                sx={{
                  border: "none",
                }}
              />
            }
          >
            <MenuItem value="none" onClick={() => onSort("none")}>
              <em>None</em>
            </MenuItem>
            <MenuItem value="lowToHigh" onClick={() => onSort("lowToHigh")}>
              Low to High
            </MenuItem>
            <MenuItem value="highToLow" onClick={() => onSort("highToLow")}>
              High to Low
            </MenuItem>
            <MenuItem value="aToZ" onClick={() => onSort("aToZ")}>
              A to Z
            </MenuItem>
            <MenuItem value="zToA" onClick={() => onSort("zToA")}>
              Z to A
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
