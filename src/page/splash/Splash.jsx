import React from "react";
import { Link } from "react-router-dom";
import "./splash.css";

function Splash() {
  return (
    <div className="splash">
      <img
        src={process.env.PUBLIC_URL + "/splash01.png"}
        alt=""
        className="splashImage"
      />
      <h1 className="splashTitle">Find the best gym near me</h1>
      <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
        <button className="splashButton">
          <span>Let’s Get Started</span>

          <img src={process.env.PUBLIC_URL + "/right-arrow.svg"} alt="" />
        </button>
      </Link>
    </div>
  );
}

export default Splash;
