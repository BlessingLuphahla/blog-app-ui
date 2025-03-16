import React from "react";
import "./gallery.css";
import { itemData } from "../../utils/galleryData";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryWrapper">
        {itemData.map((item) => {
          return (
            <div className="galleryImageWrapper">
              <img src={item.img} alt="" className="galleryImage" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
