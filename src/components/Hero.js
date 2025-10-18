import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay">
        <h1>Experience the Magic of Kenya</h1>
        <p>Unforgettable tours and safaris in the heart of Africa.</p>
        <Link to="/tours" className="hero-btn">
          Explore Our Tours
        </Link>
      </div>
    </section>
  );
}

export default Hero;
