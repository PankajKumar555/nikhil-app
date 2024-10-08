import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function ProductCard({ url, heading, price }) {
  const route = useNavigate();
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setVaue] = React.useState(1);

  const handleClickButton = async (e) => {
    e.stopPropagation();

    // if (addOn == true) {
    //   handleOpenViewDetailsRsOne();
    // } else {
    // var countJson = await addToCartService.addToCart(childId, true);
    // if (value == 0) {
    // setVaue(countJson.count);
    setIsClicked(true);
    // } else {
    //   setIsClicked(false);
    // }
    // }
  };

  const handleValueDecrease = async (e) => {
    e.stopPropagation();

    // var countJson = await addToCartService.addToCart(childId, false);
    if (value >= 2) {
      setVaue(value - 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueIncrease = async (e) => {
    e.stopPropagation();

    // var countJson = await addToCartService.addToCart(childId, true);
    if (value) {
      setVaue(value + 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  // const handleProductCards = () => {
  //   console.log("enter");
  //   toast.success("Added to cart");
  // };

  const handleNavigateToProduct = () => {
    console.log("handleNavigateToProduct");
    route("/categories/first/products");
  };

  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardActionArea>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={url.url}
            alt="green iguana"
            sx={{
              // maxWidth: 345,
              transition: "transform 0.9s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={handleNavigateToProduct}
          />
        </Box>
        <CardContent
          sx={{
            cursor: "default !important",
          }}
        >
          <Typography variant="body2" color="text.secondary" padding="5px 0px">
            {heading}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            padding="0px 0px 15px 0px"
          >
            {price}
          </Typography>
          <Box>
            {isClicked ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  border: "1px solid #15741a",
                  borderRadius: "4px",
                  color: "#15741a",
                  padding: "6px 20px",
                }}
              >
                <RemoveIcon
                  onClick={handleValueDecrease}
                  sx={{ cursor: "pointer" }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  {value}
                </Typography>
                <AddIcon
                  onClick={handleValueIncrease}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  // fontSize: "11px",
                  textTransform: "capitalize",
                  // fontWeight: "bold",
                  padding: "6px 20px",
                  // borderRadius: "10px",
                  width: "100%",
                  border: "1px solid #15741a",
                  color: "#15741a",
                  boxShadow: "none",
                }}
                color="success"
                onClick={handleClickButton}
              >
                Add to Cart
              </Button>
            )}
            {/* <Button
            variant="outlined"
            // sx={{ color: "gray" }}
            color="success"
            sx={{
              textTransform: "capitalize",
              width: "100%",
              borderColor: "#bdbdbd",
              color: "black",
            }}
            onClick={handleProductCards}
            >
            Add To Cart
          </Button> */}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
