/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* About Section */}
      <div className="footerAbout">
        <h3>About</h3>
        <p>
          Willkommen auf Alex' Blog – deinem Reiseführer! Ich teile Einblicke,
          Tipps und kuratierte Reiserouten, um dich für dein nächstes Abenteuer
          zu inspirieren. Ob Wochenendtrip oder Traumreise – hier findest du
          Expertentipps und atemberaubende Fotos, die deine Reiselust wecken.
          Werde Teil meiner Community und entdecke mit mir die Welt!
        </p>
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

      {/* Social Media Links */}
      <div className="footerSocials">
        <h3>Follow Us</h3>
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
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
