// src/pages/MasaiMara.js
import React from "react";
import maraImg from "../assets/images/masai-mara.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function MasaiMara() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${maraImg})` }}>
        <div className="detail-overlay">
          <h1>Masai Mara</h1>
          <p>World-famous reserve known for the Great Wildebeest Migration and abundant big cats.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Masai Mara</h2>
            <p>Masai Mara National Reserve is Kenya’s most famous park — a vast savannah home to large populations of lions, cheetahs, elephants and the annual wildebeest migration. Expect thrilling predator-prey action and classic African panoramas.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Great Migration</li>
              <li>Big Five</li>
              <li>River Crossings</li>
              <li>Balloon Safaris</li>
            </ul>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>July - October - Great Wildebeest Migration</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Large populations of lions, cheetahs, elephants. Annual wildebeest migration.</p>
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
