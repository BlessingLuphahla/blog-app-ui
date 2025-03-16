import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutItem">
        <span className="aboutTitle">ABOUT US</span>
        <p className="aboutParagraph">
          Welcome to <b>Wanderlust Adventures</b>, your ultimate guide to
          exploring the world one destination at a time! We are a passionate
          team of travelers, writers, and photographers who believe in the
          transformative power of travel. Our goal is to share our experiences,
          insights, and tips to inspire your own adventures. Whether you're
          looking for a quick weekend getaway or planning the trip of a
          lifetime, <b>Wanderlust Adventures</b> offers detailed travel guides,
          expert recommendations, and curated itineraries to help you navigate
          every step of your journey. From vibrant city escapes to serene nature
          retreats, we cover all types of destinations for every kind of
          traveler. Join our community of wanderers and discover the wonders of
          the world through our stories, photography, and travel resources.
          Ready to pack your bags? Let us guide you to your next unforgettable
          destination. *Our Mission:* To encourage exploration, ignite
          curiosity, and inspire travelers by providing authentic travel content
          and practical advice. *Our Vision:* To become the leading source of
          inspiration and guidance for travelers across the globe, fostering a
          community of passionate explorers.
        </p>
        <br />
        <br />
        <div className="aboutItem">
          <span className="aboutTitle">FOLLOW US</span>
          <p className="aboutParagraph">
            {" "}
            Stay connected with us on social media to catch the latest blog
            posts, travel tips, and special promotions to enhance your travel
            experiences.We believe travel is not just about visiting new places,
            but about growing as a person, embracing new cultures, and creating
            memories that will last a lifetime. At *Wanderlust Adventures*, we
            invite you to join us on this incredible journey. Let’s wander
            together!
          </p>
        </div>
        <br />
        <br />
        <div className="aboutItem">
          <span className="aboutTitle">OUR MISSION</span>
          <p className="aboutParagraph">
            To encourage exploration, ignite curiosity, and inspire travelers by
            providing authentic travel content and practical advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
