import React from "react";
import "./gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../../utils/galleryData";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Gallery() {
  const wHR = 10 / 9;

  const WithAndHeight = 1000;

  return (
    <div className="gallery">
      <div className="galleryWrapper">
        <ImageList
          sx={{ width: WithAndHeight * wHR, height: WithAndHeight }}
          variant="quilted"
          cols={5}
          rowHeight={221}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              // cols={item.cols || 1}
              // rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Gallery;
