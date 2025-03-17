/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./gallery.css";
import { itemData } from "../../utils/galleryData";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => {
        return prevIndex === itemData.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div className="gallery">
      <div className="galleryWrapper">
        {itemData.map((item, index) => {
          const sameIndex = index === imageIndex;
          if (!sameIndex) return;
          return (
            <div className="galleryImageWrapper">
              <img key={index} src={item.img} alt="" className="galleryImage" />
            </div>
          );
        })}
      </div>

      <div className="gallerySectionTwo">
        {itemData.map((item, index) => {
          return (
            <div className="gallerySectionTwoImageWrapper">
              <img
                key={index}
                src={item.img}
                alt=""
                className="gallerySectionTwoImage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
