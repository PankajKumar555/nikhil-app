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

const ImageSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isClicked, setIsClicked] = React.useState(false);
  const [value, setVaue] = React.useState(1);

  const images = [
    "https://images.unsplash.com/photo-1636572481914-a07d36917486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jvb3R8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615989382340-2595ed787ae6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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

  const handleValueDecrease = () => {
    if (value >= 2) {
      setVaue(value - 1);
    }
  };

  const handleValueIncrease = () => {
    setVaue(value + 1);
  };

  const handleAddToCart = () => {
    toast.success("Added to cart");
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
    slidesToShow: images.length,
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
                  {images.map((image, index) => (
                    <div key={index} className="thumbnail-item">
                      <img
                        src={image}
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
                {images.map((image, index) => (
                  <div key={index} className="slider-item">
                    <img
                      src={image}
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
          <Typography variant="h3" sx={{ margin: "0.5rem 0px" }}>
            Heading
          </Typography>
          <Typography variant="body1" sx={{ margin: "0.5rem 0px" }}>
            Details : Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, saepe possimus incidunt c
          </Typography>
          <br />
          <Typography variant="h5" sx={{ margin: "0.5rem 0px" }}>
            Rs: 400
          </Typography>
          <Typography variant="body2" sx={{ margin: "0.5rem 0px" }}>
            Shipping calculated at checkout.
          </Typography>
          {/* <br /> */}
          <Typography variant="body2" sx={{ margin: "0.5rem 0px" }}>
            Quantity
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              // width: "7rem",
              // background: "#15741a",
              border: "1px solid gray",
              borderRadius: "5rem",
              height: "40px",
              color: "black",
              width: "150px",
              margin: "0.5rem 0px",
            }}
          >
            <RemoveIcon
              onClick={handleValueDecrease}
              sx={{ cursor: value === 1 ? "not-allowed" : "pointer" }}
            />
            <Typography>{value}</Typography>
            <AddIcon onClick={handleValueIncrease} sx={{ cursor: "pointer" }} />
          </Box>
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
              margin: "0.5rem 0px",
            }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Grid>
        <RelatedProducts />
      </Grid>
    </>
  );
};

export default ImageSlider;
