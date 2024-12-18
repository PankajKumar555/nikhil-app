// src/ImageSlider.js
import React, { useState } from "react";
import Slider from "react-slick";
import "./ImageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Typography } from "@mui/material";
import { RelatedProducts } from "./RelatedProducts";
import { toast } from "react-toastify";
import { currencySymbol } from "../generic-component/helper-function/HelperFunction";
import {
  addToCart,
  checkIfAvailable,
} from "../generic-component/helper-function/cart";

const ImageSlider = ({ productDetails }) => {
  console.log("---------product", productDetails);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setValue] = React.useState(1);
  // console.log("value-----", value);

  // const images = [
  //   "https://images.unsplash.com/photo-1636572481914-a07d36917486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1615989382340-2595ed787ae6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  const handleThumbnailHover = (index) => {
    setCurrentIndex(index);
    // nav1.slickGoTo(index);
  };

  React.useEffect(() => {
    const fetchCounts = async () => {
      try {
        if (!productDetails?.productId) return; // Exit early if productId is missing or invalid
        const jsonCount = await checkIfAvailable(productDetails?.productId);
        console.log("----->>>jsonCount", jsonCount);
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

    fetchCounts(); // Call the async function
  }, [productDetails?.productId]);

  const handleClickButton = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(productDetails, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(countJson.count);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueDecrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(productDetails, false);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value - 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleValueIncrease = async (e) => {
    e.stopPropagation();
    const countJson = await addToCart(productDetails, true);
    if (countJson?.count && countJson?.count > 0) {
      setValue(value + 1);
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const thumbSettings = {
    slidesToShow: productDetails?.imageList?.length,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
    // infinite: false,
  };

  const nextSlide = () => {
    nav2.slickNext();
  };

  const prevSlide = () => {
    nav2.slickPrev();
  };

  return (
    <>
      <Grid container item md={11} lg={11} sx={{ margin: " 2rem auto" }}>
        <Grid container item md={7} lg={7}>
          <div className="slider-container">
            <div className="thumbnail-slider-container">
              <button className="slider-button" onClick={prevSlide}>
                <ArrowDropUpIcon />
              </button>
              <div className="thumbnail-slider">
                <Slider {...thumbSettings} ref={(slider2) => setNav2(slider2)}>
                  {productDetails?.imageList?.map((image, index) => (
                    <div key={index} className="thumbnail-item">
                      <img
                        src={image?.productImgUrl}
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnail-image"
                        onClick={() => handleThumbnailHover(index)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <button className="slider-button" onClick={nextSlide}>
                <ArrowDropDownIcon />
              </button>
            </div>
            <div className="main-slider">
              <Slider {...mainSettings} ref={(slider1) => setNav1(slider1)}>
                {productDetails?.imageList?.map((image, index) => (
                  <div key={index} className="slider-item">
                    <img
                      src={image?.productImgUrl}
                      alt={`Slide ${index + 1}`}
                      className="slider-image"
                      style={index === currentIndex ? zoomStyle : {}}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Grid>
        <Grid container item md={5} lg={5} sx={{ display: "block" }}>
          <Typography variant="h4" sx={{ margin: "0.5rem 0px" }}>
            {productDetails?.productTitle}
          </Typography>
          <Typography variant="body1" sx={{ margin: "0.5rem 0px" }}>
            <a href="#">{productDetails?.productCatName}</a>
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "1rem 0px",
            }}
          >
            <Typography variant="h5">
              {currencySymbol}
              {productDetails?.offerPrice}
            </Typography>{" "}
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                textDecoration: "line-through",
              }}
            >
              {currencySymbol}
              {productDetails?.listPrice}
            </Typography>
            &nbsp;&nbsp;
            <Typography color="success.main" variant="h6">
              Save {currencySymbol}
              {productDetails?.listPrice - productDetails?.offerPrice}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0.5rem 0px",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              Product Code :
            </Typography>
            &nbsp;
            <Typography variant="body2">{productDetails?.sku}</Typography>
          </Box>
          <Typography variant="body2" sx={{ margin: "0.5rem 0px" }}>
            Shipping calculated at checkout.
          </Typography>
          {/* <br /> */}
          {/* <Typography variant="body1" sx={{ margin: "0.5rem 0px" }}>
            Quantity
          </Typography> */}
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
                // width: "7rem",
                minWidth: "10px",
                // background: "#15741a",
                borderRadius: "10rem",
                height: "45px",
                width: "50%",
                // margin: "0.5rem 0px",
              }}
            >
              <RemoveIcon
                onClick={handleValueDecrease}
                // sx={{ cursor: value === 1 ? "not-allowed" : "pointer" }}
                sx={{ cursor: "pointer" }}
              />
              <Typography>{value}</Typography>
              <AddIcon
                onClick={handleValueIncrease}
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
                // width: "7rem",
                minWidth: "10px",
                background: "#15741a",
                borderRadius: "10rem",
                height: "45px",
                width: "50%",
              }}
              onClick={handleClickButton}
              disabled={productDetails?.inStock === true ? false : true}
              // onClick={handleValueIncrease}
            >
              Add To Cart
            </Button>
          )}
        </Grid>
        <RelatedProducts productDetails={productDetails} />
      </Grid>
    </>
  );
};

export default ImageSlider;
