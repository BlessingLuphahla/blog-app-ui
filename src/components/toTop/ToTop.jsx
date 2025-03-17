import React from "react";
import "./toTop.css";
import { useLocation } from "react-router-dom";

function ToTop({ ref }) {
  const location = useLocation();

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("scrolled", location.pathname);
  };

  return (
    <div className="toTop">
      <div className="toTopWrapper">
        <div className="toTopIcon" onClick={handleTop}>
          ↥
        </div>
      </div>
    </div>
  );
}

export default ToTop;
