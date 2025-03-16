import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="errorComponent">
      <h1 className="errorComponentTitle">Error!</h1>
      <h2 className="errorComponentMessage">
        What are you doing here?? You not supposed to be here , Please go back
        Home!!!
      </h2>
      <Link className="errorComponentLink" to="/">Go Back Home</Link>
    </div>
  );
}

export default Error;
