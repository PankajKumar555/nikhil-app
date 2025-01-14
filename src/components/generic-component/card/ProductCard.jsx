import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router";
import { currencySymbol } from "../helper-function/HelperFunction";
import { addToCart, checkIfAvailable } from "../helper-function/cart";
import { useDispatch } from "react-redux";
import { setCount } from "../../../redux/slice/countSlice";

export default function ProductCard({ data }) {
  const route = useNavigate();
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchCounts = async () => {
      try {
        const jsonCount = await checkIfAvailable(data?.productId);
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
  }, [value]);

  const handleClickButton = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(data, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(countJson.count);
      setIsClicked(true);
      dispatch(setCount(true));
    } else {
      setIsClicked(false);
      dispatch(setCount(true));
    }
  };

  const handleValueDecrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(data, false);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value - 1);
      setIsClicked(true);
      dispatch(setCount(true));
    } else {
      setIsClicked(false);
      dispatch(setCount(true));
    }
  };

  const handleValueIncrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(data, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value + 1);
      setIsClicked(true);
      dispatch(setCount(true));
    } else {
      setIsClicked(false);
      dispatch(setCount(true));
    }
  };

  const handleNavigateToProduct = (data) => {
    console.log("handleNavigateToProduct");
    route(`/categories/${data?.productCategory}/products/${data?.productId}`);
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxHeight: { xs: "auto", sm: "25rem" },
        height: { xs: "auto", sm: "25rem" },
        minHeight: { xs: "auto", sm: "25rem" },
        minWidth: { xs: "auto", sm: "250px" },
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "2px 2px 2px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", // Prevent hover shadow
        },
      }}
    >
      {/* <CardActionArea
        disableRipple
        sx={{
          "&:focus": { boxShadow: "none" },
        }}
      > */}
      <Box
        sx={{
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => handleNavigateToProduct(data)}
      >
        <CardMedia
          component="img"
          height="auto"
          image={
            data?.imageList[0]?.productImgUrl ??
            "https://images.meesho.com/images/products/102639327/ieojq_512.webp"
          }
          alt={data?.imageList[0]?.productImgCaption ?? ""}
          sx={{
            transition: "transform 0.9s ease",
            height: { xs: "auto", sm: "14rem" },
            minHeight: { xs: "10rem", sm: "14rem" },
            width: "-webkit-fill-available",
            objectFit: "contain",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
      <CardContent
        sx={{
          cursor: "default !important",
          padding: { xs: "8px", sm: "16px" },
          paddingBottom: { xs: "8px !important", sm: "16px !important" },
        }}
      >
        <Box
          onClick={() => handleNavigateToProduct(data)}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            margin="5px 0px"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
              minHeight: "3em",
              lineHeight: "1.5em",
            }}
          >
            {data?.productTitle}
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "start",
              alignItems: "center",
              margin: "5px auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {currencySymbol}&nbsp;
                {data?.offerPrice}
              </Typography>
              &nbsp;&nbsp;
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {currencySymbol}&nbsp;
                {data?.listPrice}
              </Typography>
              &nbsp;&nbsp;
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="success.main"
                sx={{
                  fontWeight: "bold",
                }}
              >
                <span style={{ fontWeight: "500" }}>Save </span>{" "}
                {currencySymbol}
                &nbsp;
                {data?.listPrice - data?.offerPrice}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "5px auto",
            }}
          >
            {data?.inStock === true ? (
              <Typography variant="body1" color="text.secondary">
                Stock Available
              </Typography>
            ) : (
              <Typography variant="body1" color="error.main">
                Out of Stock
              </Typography>
            )}
          </Box>
        </Box>

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
                padding: { xs: "6px", sm: "6px 20px" },
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
                textTransform: "capitalize",
                padding: "6px 20px",
                width: "100%",
                border: "1px solid #15741a",
                color: "#15741a",
                boxShadow: "none",
                cursor: data?.inStock ? "pointer" : "not-allowed",
              }}
              color="success"
              onClick={handleClickButton}
              disabled={data?.inStock === true ? false : true}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
