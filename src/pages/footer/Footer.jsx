/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerText">
        Copyright © {currentYear} Blog app |{" "}
        <a className="footerLink" href="http://pakamatech.com">By Pakama Tech</a>
      </div>
    </div>
  );
}

export default Footer;
