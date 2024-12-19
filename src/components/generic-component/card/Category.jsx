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
import { useParams } from "react-router";

export default function Category({ childCategoryData, setChlidCategoryId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { slug } = useParams();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    setAnchorEl(null);
    setChlidCategoryId(slug);
  };

  const handleSelectChildCategory = (e, categoryId) => {
    e.preventDefault();
    setChlidCategoryId(categoryId);
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
          Category <ExpandMoreIcon sx={{ color: "#000", fontSize: "20px" }} />
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
          {childCategoryData?.map((item, index) => (
            <MenuItem
              //    onClick={handleClose}
              key={index}
            >
              <FormControlLabel
                //   required
                control={
                  <Checkbox
                    onClick={(e) =>
                      handleSelectChildCategory(e, item?.categoryId)
                    }
                  />
                }
                label={item?.categoryName}
              />
            </MenuItem>
          ))}
          {/* <MenuItem>
          <FormControlLabel
            //   required
            control={<Checkbox />}
            label="Out of stock"
          />
        </MenuItem> */}
        </Menu>
      </div>
    </Box>
  );
}
