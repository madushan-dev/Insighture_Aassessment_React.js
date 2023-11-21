import React from "react";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {
  const duplicatedImages = [...images, images[0]];

  return (
    <div className="carousel-wrapper">
      <div className="ImageCarousel">
        {duplicatedImages.map((image, index) => (
          <img className="carousel-item" key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
