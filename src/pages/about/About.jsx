import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutItem">
        <span className="aboutTitle">ÜBER MICH</span>
        <p className="aboutParagraph">
          Willkommen auf Alex' Blog, deinem ultimativen Guide, um die Welt Reiseziel für Reiseziel zu entdecken! 
          Ich bin ein leidenschaftliches Team aus Reisenden, Autoren und Fotografen, die an die transformative Kraft des Reisens glauben.
        </p>
      </div>

      <div className="aboutItem">
        <span className="aboutTitle">FOLGEN SIE MIR</span>
        <p className="aboutParagraph">
          Bleiben Sie über die sozialen Medien mit mir in Verbindung und verpassen Sie keine Blogbeiträge.
        </p>
      </div>

      <div className="aboutItem">
        <span className="aboutTitle">MEINE MISSION</span>
        <p className="aboutParagraph">
          Wir möchten zum Entdecken anregen, die Neugier wecken und Reisende inspirieren.
        </p>
      </div>
    </div>
  );
}

export default About;
