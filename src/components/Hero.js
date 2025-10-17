import React from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero.jpg"; // ← make sure the path matches your image name

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
        <button className="hero-btn">Explore Our Tours</button>
      </div>
    </section>
  );
}

export default Hero;
