// src/pages/LakeNakuru.js
import React from "react";
import lakeNakuruImg from "../assets/images/lake-nakuru.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function LakeNakuru() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${lakeNakuruImg})` }}>
        <div className="detail-overlay">
          <h1>Lake Nakuru</h1>
          <p>Shallow soda lake famous for millions of flamingos and rhino sanctuaries.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Lake Nakuru</h2>
            <p>Lake Nakuru is a birdwatcher’s paradise and home to both black and white rhinos. The alkaline lake often hosts thousands (sometimes millions) of flamingos.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Flamingos</li>
              <li>Rhinos</li>
              <li>Birdwatching</li>
            </ul>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year, best in cooler months</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Millions of flamingos, rhino sanctuaries, birdwatching paradise.</p>
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
