// src/pages/NorthCoast.js
import React from "react";
import coastImg from "../assets/images/coast.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function NorthCoast() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${coastImg})` }}>
        <div className="detail-overlay">
          <h1>North Coast</h1>
          <p>Experience serenity and luxury at the beach hotels. Perfect relaxing spots with excellent views.</p>
        </div>
      </div>

      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About North Coast</h2>
            <p>Experience serenity and luxury at the beach hotels. Perfect relaxing spots with excellent views.</p>

            <h3>Highlights</h3>
            <ul>
              <li>Serena Beach Resort and Spa</li>
              <li>Sarova Whitesand</li>
              <li>Voyage Beach</li>
              <li>South Coast</li>
              <li>Swahili Beach</li>
              <li>Lamu Old Town</li>
              <li>Baobab Beach</li>
              <li>Diani Beach</li>
              <li>Leisure Lodge</li>
            </ul>
          </div>

          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Luxury beach hotels, Lamu Old town Tour. Swahili culture</p>
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
