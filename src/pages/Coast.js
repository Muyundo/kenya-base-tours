// src/pages/Coast.js
import React from "react";
import coastImg from "../assets/images/coast.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function Coast() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${coastImg})` }}>
        <div className="detail-overlay">
          <h1>Kenya Coast (Diani/Watamu)</h1>
          <p>White-sand beaches, coral reefs and Swahili culture on the Indian Ocean.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Kenya Coast</h2>
            <p>Kenya’s coast combines relaxed beach time with vibrant Swahili culture. Diani and Watamu offer coral reefs, boat trips, and excellent seafood.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Beaches</li>
              <li>Snorkeling</li>
              <li>Water sports</li>
            </ul>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>December - March, July - October</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>White-sand beaches, coral reefs, Swahili culture, Indian Ocean.</p>
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
