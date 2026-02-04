// src/pages/Samburu.js
import React from "react";
import samburuImg from "../assets/images/samburu.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function Samburu() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${samburuImg})` }}>
        <div className="detail-overlay">
          <h1>Samburu</h1>
          <p>Northern Kenya with unique species and vivid cultural experiences.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Samburu</h2>
            <p>Samburu National Reserve showcases species not commonly found in the south and offers intimate cultural experiences with Samburu communities.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Reticulated giraffe</li>
              <li>Grevy's zebra</li>
              <li>Samburu culture</li>
            </ul>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>Throughout the year.</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Unique northern species, vibrant Samburu culture, stunning landscapes.</p>
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
