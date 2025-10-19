// src/components/Loader.js
import React from "react";
import "./Loader.css";
import logo from "../assets/images/logo.png"; // use your existing logo

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src={logo} alt="Kenya Base Tours" className="loader-logo" />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
