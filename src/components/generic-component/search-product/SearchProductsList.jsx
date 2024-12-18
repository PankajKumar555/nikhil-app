import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { currencySymbol } from "../helper-function/HelperFunction";
import { useNavigate } from "react-router";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addToCart, checkIfAvailable } from "../helper-function/cart";

const SearchProductsList = ({ item, setInputValue, handleCloseDialog }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const route = useNavigate();

  const handleOpenViewCart = (item) => {
    route(`/categories/${item?.productCategory}/products/${item?.productId}`);
    handleCloseDialog();
    setInputValue("");
    // setViewDetails(item);
  };

  React.useEffect(() => {
    const fetchCounts = async () => {
      try {
        const jsonCount = await checkIfAvailable(item.productId);
        if (jsonCount.count > 0) {
          setIsClicked(true);
          setValue(jsonCount.count);
        } else {
          setIsClicked(false);
        }
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchCounts();
  }, []);

  const handleClickButton = async (e, data) => {
    e.stopPropagation();
    const countJson = await addToCart(data, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(countJson.count);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueDecrease = async (e, data) => {
    e.stopPropagation();
    const countJson = await addToCart(data, false);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value - 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueIncrease = async (e, data) => {
    e.stopPropagation();
    const countJson = await addToCart(data, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value + 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <Box
      onClick={() => handleOpenViewCart(item)}
      sx={{ cursor: "pointer", marginTop: "1rem" }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <img
            src={item?.imageList[0]?.productImgUrl ?? ""}
            style={{
              objectFit: "cover",
              width: "5rem",
              height: "5rem",
              borderRadius: "0.5rem",
            }}
            alt={item?.imageList[0]?.productImgCaption ?? ""}
          />
          <Box
            sx={{
              margin: "auto 1rem",
              width: "-webkit-fill-available",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                {item?.productName}
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                {item?.productTitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                {currencySymbol}
                {item?.offerPrice}
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="body1"
                sx={{
                  color: "#b9b4b4",
                  textDecoration: "line-through",
                }}
              >
                {currencySymbol}
                {item?.listPrice}
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="body1"
                sx={{ color: "#15741a", fontWeight: "bold" }}
              >
                Save {currencySymbol}
                {item?.listPrice - item?.offerPrice}
              </Typography>
            </Box>
          </Box>
          <Box>
            {isClicked ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  // width: "7rem",
                  // background: "#15741a",
                  border: "1px solid gray",
                  color: "black",
                  boxShadow: "none",
                  textTransform: "capitalize",
                  minWidth: "7rem",
                  // background: "#15741a",
                  borderRadius: "5rem",
                  height: "36px",
                  width: "100%",
                  // margin: "0.5rem 0px",
                }}
              >
                <RemoveIcon
                  onClick={(e) => handleValueDecrease(e, item)}
                  // sx={{ cursor: value === 1 ? "not-allowed" : "pointer" }}
                  sx={{ cursor: "pointer" }}
                />
                <Typography>{value}</Typography>
                <AddIcon
                  onClick={(e) => handleValueIncrease(e, item)}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            ) : (
              <Button
                variant="contained"
                color="success"
                sx={{
                  boxShadow: "none",
                  textTransform: "capitalize",
                  minWidth: "7rem",
                  background: "#15741a",
                  borderRadius: "5rem",
                  height: "36px",
                  width: "100%",
                }}
                onClick={(e) => handleClickButton(e, item)}
                // onClick={handleValueIncrease}
              >
                Add To Cart
              </Button>
            )}
          </Box>
        </Box>
      </DialogTitle>
      <Divider />
    </Box>
  );
};

export default SearchProductsList;
