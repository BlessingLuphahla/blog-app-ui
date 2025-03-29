import React, { useState, useEffect } from "react";
import "./gallery.css";
import { itemData } from "../../utils/galleryData";
import http from "../../utils/axios";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pictureData, setPictureData] = useState([]);

  const openModal = (index) => {
    setImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    const getAllPics = async () => {
      try {
        const res = await http.get("/picture");
        setPictureData(res.data);
      } catch (error) {}
    };

    getAllPics();
  }, []);

  return (
    <div className="gallery">
      {pictureData.length === 0 && (
        <h2>There Are No Images In the Gallery Right Now</h2>
      )}
      {pictureData.map((item, index) => {
        return (
          <div key={index} className={`galleryItem size-${index % 5}`}>
            <img
              src={item.url}
              alt={`Gallery Item ${index + 1}`}
              className="galleryImage"
              onClick={() => openModal(index)}
              loading="lazy"
            />
          </div>
        );
      })}

      {isModalOpen && (
        <div className="modal show" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={itemData[imageIndex].img}
              alt="Expanded view"
              className="modalImage"
            />
            <button className="prevBtn" onClick={prevImage}>
              &lt;
            </button>
            <button className="nextBtn" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
