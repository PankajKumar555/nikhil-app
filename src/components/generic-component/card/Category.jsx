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

export default function Category({
  childCategoryData,
  setChlidCategoryId,
  setChlidCategoryName,
  selectedCategory,
  setSelectedCategory,
}) {
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
    setSelectedCategory(null);
    setChlidCategoryName("");
  };

  const handleSelectChildCategory = (e, item) => {
    e.preventDefault();
    setSelectedCategory(item?.categoryId);
    setChlidCategoryId(item?.categoryId);
    setChlidCategoryName(item?.categoryName);
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
        </Menu>
      </div>
    </Box>
  );
}
