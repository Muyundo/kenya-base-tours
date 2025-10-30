import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png"; // ✅ Import your transparent logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ✅ Top Info Bar */}
      <div className="top-bar">
        <p>
          📞 <a href="tel:+254 115 668 995">+254 115 668 995</a> &nbsp; | &nbsp;
          📧 <a href="mailto:info@kenyabasetours.co.ke">info@kenyabasetours.co.ke</a>
        </p>
      </div>

      {/* ✅ Main Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Kenya Base Tours Logo" className="logo-img" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link>
          <Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
