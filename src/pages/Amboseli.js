// src/pages/Amboseli.js
import React from "react";
import amboseliImg from "../assets/images/amboseli.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function Amboseli() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${amboseliImg})` }}>
        <div className="detail-overlay">
          <h1>Amboseli</h1>
          <p>Iconic views of Kilimanjaro and large elephant herds in open plains.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Amboseli</h2>
            <p>Amboseli National Park offers spectacular views of Mount Kilimanjaro and a high chance of close elephant sightings. It’s ideal for photographers and first-time safari-goers.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Mount Kilimanjaro views</li>
              <li>Elephant herds</li>
              <li>Birdwatching</li>
            </ul>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year.</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Iconic views, large elephant herds, open plains, birdwatching.</p>
            </div>
            <div className="box">
              <h4>Want to visit?</h4>
              <Link to="/contact" className="btn">Request a Quote</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
