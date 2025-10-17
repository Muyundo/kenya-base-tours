import React from "react";
import "./About.css";
import aboutHero from "../assets/images/about-hero.jpg"; // we’ll add this image below

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Kenya Base Tours</h1>
          <p>Discover who we are, our mission, and what makes every journey with us special.</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-intro">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Kenya Base Tours is a trusted travel company based in Kenya, dedicated to offering
            exceptional wildlife safaris, adventure tours, and cultural experiences across East Africa.
            Our team of passionate local experts ensures every journey is immersive, safe, and unforgettable.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container mission-vision-container">
          <div className="mission-card">
            <h3>🌍 Our Mission</h3>
            <p>
              To connect travelers with the authentic beauty of Kenya through responsible,
              sustainable, and personalized travel experiences.
            </p>
          </div>

          <div className="vision-card">
            <h3>✨ Our Vision</h3>
            <p>
              To become the leading eco-conscious tour company in Kenya, known for unforgettable
              journeys and community-centered tourism.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🦓</span>
              <h4>Authenticity</h4>
              <p>We create genuine experiences that connect you to Kenya’s people, culture, and nature.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🧭</span>
              <h4>Integrity</h4>
              <p>We believe in transparency, trust, and delivering what we promise.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🏕</span>
              <h4>Sustainability</h4>
              <p>We promote eco-friendly tourism that supports conservation and communities.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💬</span>
              <h4>Customer Focus</h4>
              <p>Every journey is personal — your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Travel with Us</h2>
          <p>
            Experience Kenya’s wonders with a team that truly cares.
          </p>
          <a href="/contact" className="about-btn">Plan My Trip</a>
        </div>
      </section>

    </div>
  );
}

export default About;
