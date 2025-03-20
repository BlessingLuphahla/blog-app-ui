/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* About Section */}
      <div className="footerAbout">
        <h3>About</h3>
        <p>
          Willkommen auf Alex' Blog – deinem Reiseführer! Ich teile Einblicke,
          Tipps und ausgewahle Reiserouten, um dich für dein nächstes Abenteuer
          zu inspirieren. Ob Wochenendtrip oder Traumreise – hier findest du
          Expertentipps und atemberaubende Fotos, die deine Reiselust wecken.
          Werde Teil meiner Community und entdecke mit mir die Welt!
        </p>
      </div>

      {/* Services Section */}
      <div className="footerServices">
        <h3>Services</h3>
        <ul>
          <li>Travel Consultancy</li>
          <li>Trip Planning</li>
          <li>Destination Guides</li>
          <li>Custom Itineraries</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="footerNav">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Contact Details */}
      <div className="footerContact">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:info@itstravel.com">info@itstravel.com</a></p>
        <p>Phone: <a href="tel:+4915227316839">+49 1522 7316839</a></p>
      </div>

      {/* Copyright Section */}
      <div className="footerText">
        Copyright © {currentYear} It's Travel |{" "}
        <a className="footerLink" href="http://pakamatech.com">
          By Pakama Tech
        </a>
      </div>
    </div>
  );
}

export default Footer;
