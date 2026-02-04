import React from "react";
import serengetiImg from "../assets/images/serengeti.jpg";
import "./DestinationDetail.css";

export default function Serengeti() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${serengetiImg})` }}>
        <div className="detail-overlay">
          <h1>Serengeti National Park</h1>
          <p>Vast plains, the Great Migration, and abundant wildlife in Tanzania's most famous park.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Serengeti National Park</h2>
            <p>
              The Serengeti is located in northern Tanzania, bordering the Maasai Mara National Reserve in Kenya, and is part of a vast, unfenced ecosystem. The park is world-renowned for its annual migration of over 1.5 million wildebeest, hundreds of thousands of zebras and gazelles, and its classic African safari landscapes.
            </p>
            <h3>Highlights</h3>
            <ul>
              <li>Wildebeest migration</li>
              <li>Guided Game Drives</li>
              <li>Hot Air Balloon Safaris</li>
              <li>Walking Safaris</li>
              <li>Cultural Visits - Maasai Culture</li>
              <li>Big Cats and the Big Five</li>
              <li>Endless Savannah and Acacia Woodlands</li>
            </ul>
            <h3>Best Time to Visit</h3>
            <p>All year, best in cooler months (June - October).</p>
            <h3>Quick Facts</h3>
            <ul>
              <li>UNESCO World Heritage Site</li>
              <li>Home to the "Big Five" (lion, leopard, elephant, buffalo, rhino)</li>
              <li>Over 500 bird species</li>
              <li>Neighboring the Ngorongoro Conservation Area and Maasai Mara</li>
              <li>Famous for dramatic predator-prey action</li>
              <li>Stunning sunsets and photographic opportunities</li>
            </ul>
            <h3>Why Visit Serengeti?</h3>
            <p>
              The Serengeti offers unforgettable wildlife encounters, breathtaking scenery, and a chance to experience the heart of Africa's wilderness. Whether you seek adventure, photography, or a peaceful escape, the Serengeti delivers a truly magical safari experience.
            </p>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year, best in cooler months</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <ul>
                <li>Area: 14,750 km²</li>
                <li>Location: Northern Tanzania</li>
                <li>UNESCO World Heritage Site</li>
                <li>Over 1.5 million wildebeest</li>
                <li>Hundreds of thousands of zebras and gazelles</li>
              </ul>
            </div>
            <div className="box">
              <h4>Want to visit?</h4>
              <a href="/contact" className="btn">Request a Quote</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
