import React from "react";
import "./contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contactFirstSection">
        <div className="contactText">
          <h2 className="contactTitle">
            If you have any questions or suggestions , Write an email or use the
            contact form
          </h2>
          <h3 className="contactEmail">Email: info@itstravel.com</h3>
        </div>
      </div>

      <div className="contactSecondSection">
        <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
          <input id="name" type="text" placeholder="Your Name" />
          <input id="email" type="text" placeholder="Your Email" />
          <input id="subject" type="text" placeholder="Subject" />
          <textarea
            id="message"
            placeholder="Enter Your Message Here (Optional)"
          ></textarea>
          <input id="message" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
