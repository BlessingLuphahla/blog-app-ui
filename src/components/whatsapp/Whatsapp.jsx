import React, { useState } from "react";
import "./whatsapp.css"; // Import the CSS file
import image from "../../images/about.jpg";
import WhatsappIcon from "../../images/whatsapp.svg";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);

  const phoneNumber = "+1234567890";
  const message = "Hello, I need help with your services!";

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

              <Link
                to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <div className="whatsappTextBoxLowerButton">
                  <img src={WhatsappIcon} alt="" className="whatsappButton" />
                  <span>Chat On Whatsapp</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsApp;
