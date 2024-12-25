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

export default function ProductCard({ data }) {
  const route = useNavigate();
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setValue] = React.useState(1);

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
    } else {
      setIsClicked(false);
    }
  };

  const handleValueDecrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(data, false);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value - 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueIncrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(data, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value + 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
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
        maxHeight: "25rem",
        height: "25rem",
        minHeight: "25rem",
        minWidth: "250px",
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "0px 2px 1px -2px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", // Prevent hover shadow
        },
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          "&:focus": { boxShadow: "none" },
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
          }}
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
              height: "14rem",
              objectFit: "contain",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleNavigateToProduct(data)}
          />
        </Box>
        <CardContent
          sx={{
            cursor: "default !important",
          }}
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
          {/* <Typography variant="body2" color="text.secondary" padding="5px 0px">
            {data?.description}
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "5px auto",
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
            <Typography
              variant="body1"
              color="success.main"
              sx={{
                fontWeight: "bold",
              }}
            >
              <span style={{ fontWeight: "500" }}>Save </span> {currencySymbol}
              &nbsp;
              {data?.listPrice - data?.offerPrice}
            </Typography>
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
                  textTransform: "capitalize",
                  padding: "6px 20px",
                  width: "100%",
                  border: "1px solid #15741a",
                  color: "#15741a",
                  boxShadow: "none",
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
      </CardActionArea>
    </Card>
  );
}
