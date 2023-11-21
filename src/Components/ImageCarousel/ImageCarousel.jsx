import React from "react";
import { Link } from "react-router-dom";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {
  const duplicatedImages = [...images, images[0]];

  return (
    <div className="carousel-wrapper">
      <div className="ImageCarousel">
        {duplicatedImages.map((image, index) => (
          <Link to="/products" key={index} className="carousel-item-link">
            <img className="carousel-item" src={image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
