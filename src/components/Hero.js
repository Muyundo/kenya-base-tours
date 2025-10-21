// src/components/Hero.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import hero1 from "../assets/images/masai-mara.jpg"; 
import hero2 from "../assets/images/amboseli.jpg"; 
import hero3 from "../assets/images/hero3.jpg"; 

function Hero() {
  const slides = [
    {
      image: hero1,
      title: "Experience the Magic of Masai Mara",
      text: "Witness the Great Migration and the heart of Kenya’s wildlife.",
    },
    {
      image: hero2,
      title: "Adventure in Amboseli National Park",
      text: "Explore elephants and breathtaking views of Mount Kilimanjaro.",
    },
    {
      image: hero3,
      title: "Relax on the Indian Ocean Coast",
      text: "White sandy beaches, turquoise waters, and Swahili charm await.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in new
      }, 600); // time matches CSS fade duration
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className={`hero hero-slideshow ${fade ? "fade-in" : "fade-out"}`}
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="hero-overlay animate-text">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].text}</p>
        <Link to="/tours" className="hero-btn">
          Explore Our Tours
        </Link>
      </div>
    </section>
  );
}

export default Hero;
