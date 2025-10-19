import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  const messages = [
    "Experience the Magic of Kenya",
    "Witness the Great Migration",
    "Relax on the Indian Ocean Coast",
    "Explore Kenya’s Hidden Highlands",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay">
        <h1 key={currentMessage} className="hero-heading fade-text">
          {messages[currentMessage]}
        </h1>
        <p>Unforgettable tours and safaris in the heart of Africa.</p>
        <Link to="/tours" className="hero-btn">
          Explore Our Tours
        </Link>
          <div className="scroll-down"></div> 

      </div>
    </section>
  );
}

export default Hero;
