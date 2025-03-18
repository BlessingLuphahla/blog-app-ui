import React, { useState } from "react";
import "./gallery.css";
import { itemData } from "../../utils/galleryData";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length
    );
  };

  return (
    <div className="gallery">
      {/* Gallery Images */}
      {itemData.map((item, index) => (
        <div key={index} className="galleryImageWrapper">
          <img
            src={item.img}
            alt={`Gallery Item ${index + 1}`}  // Add alt text for accessibility
            className="galleryImage"
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img src={itemData[imageIndex].img} alt="" className="modalImage" />
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
