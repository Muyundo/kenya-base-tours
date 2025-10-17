import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover Kenya’s Hidden Treasures</h1>
          <p>Experience the wild, the culture, and the coast — all in one unforgettable journey.</p>
          <button className="hero-btn">Explore Tours</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
