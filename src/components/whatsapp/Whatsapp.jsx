import React, { useState } from "react";
import "./whatsapp.css"; // Import the CSS file
import image from "../../images/logo.jpg";
import WhatsappIcon from "../../images/whatsapp.svg";

const WhatsApp = () => {
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);

  const phoneNumber = "+263788793302";
  const message = "Hello, I need help with your services!";

  const handleWhatsappMessage = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp">
      <div className="whatsappWrapper">
        <div className="whatsappIcon">
          <img
            onClick={() => setIsTextBoxOpen(!isTextBoxOpen)}
            className="whatsappButton"
            src={WhatsappIcon}
            alt=""
          />
        </div>
        {isTextBoxOpen && (
          <div className="whatsappTextBox">
            <div
              onClick={() => setIsTextBoxOpen(false)}
              className="whatsappTextBoxClose"
            >
              ×
            </div>
            <div className="whatsappTextBoxUpper">
              <div className="whatsappTextBoxUpperProfile">
                <img
                  alt="profilepic"
                  src={image}
                  className="whatsappTextBoxUpperProfilePic"
                />
                <div className="whatsappTextBoxUpperProfileOnlineStatus"></div>
              </div>
              <div className="whatsappTextBoxUpperProfileDetails">
                <div className="whatsappTextBoxUpperProfileDetailsName">
                  Its Travel
                </div>
                <div className="whatsappTextBoxUpperProfileDetailsOnline">
                  online
                </div>
              </div>
            </div>
            <hr className="whatsappTextBoxLineBreak" />
            <div className="whatsappTextBoxLower">
              <div className="whatsappTextBoxLowerMessage">
                <p>Chat With Us, Lets Work Together</p>
              </div>

              <div
                onClick={handleWhatsappMessage}
                className="whatsappTextBoxLowerButton"
              >
                <img src={WhatsappIcon} alt="" className="whatsappButton" />
                <span>Chat On Whatsapp</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsApp;
