/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./gallery.css";
import { itemData } from "../../utils/galleryData";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const galleryImages = itemData.map((item, index) => (
    <div
      key={index}
      className="galleryImageWrapper"
      style={{
        opacity: index === imageIndex ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <img src={item.img} alt="" className="galleryImage" />
    </div>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery">
      <div className="galleryWrapper">{galleryImages}</div>
    </div>
  );
}

export default Gallery;
