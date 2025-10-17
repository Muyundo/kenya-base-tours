import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Kenya Base Tours</div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
