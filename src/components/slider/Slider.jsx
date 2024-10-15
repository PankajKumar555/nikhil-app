import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./index.css";

const GiftSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "banner-carousel",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://media.istockphoto.com/id/1170338367/photo/fun-super-santa-claus-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=ueLtNnrNuX0XzSLGrUmdfttkT9hkWcOcFQ0aq0zGnW0=",
    "https://media.istockphoto.com/id/185586673/photo/toy-mouse.jpg?s=1024x1024&w=is&k=20&c=MDVSG7DQ6lR3WhtiYF7StLGAVYFILLoxfP28HRkK81s=",
    "https://media.istockphoto.com/id/178799449/photo/little-train-toy-3d.jpg?s=2048x2048&w=is&k=20&c=peBRv0ySqb_DTsff_bYqIbmb0JYaRFBcOlj_fZbS8I8=",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Box sx={{ width: "100%", height: "250px", position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Gift Item ${index + 1}`}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      {/* Custom CSS for arrows */}
      <style jsx>{`
        .slick-prev {
          left: 10px; /* Position left */
          z-index: 1;
        }
        .slick-next {
          right: 10px; /* Position right */
          z-index: 1;
        }
      `}</style>
    </Box>
  );
};

export default GiftSlider;
