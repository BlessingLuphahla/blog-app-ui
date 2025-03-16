import React from "react";
import "./whatsapp.css"; // Import the CSS file

const WhatsApp = () => {
  const phoneNumber = "+1234567890"; // Replace with your actual number
  const message = "Hello, I need help with your services!"; // Predefined message

  return (
    <div className="whatsapp">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        className="whatsappButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="whatsappImg"/>
      </a>
    </div>
  );
};

export default WhatsApp;
