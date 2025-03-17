import React from "react";
import "./toTop.css";

function ToTop() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
