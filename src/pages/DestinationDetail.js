// src/pages/DestinationDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";
import "./DestinationDetail.css";

export default function DestinationDetail() {
  const { slug } = useParams();
  const place = destinations.find((d) => d.id === slug);

  if (!place) {
    return (
      <div className="container section">
        <h2>Destination not found</h2>
        <p>Try returning to the destinations list.</p>
        <Link to="/destinations">Back to destinations</Link>
      </div>
    );
  }

  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${place.image})` }}>
        <div className="detail-overlay">
          <h1>{place.name}</h1>
          <p>{place.short}</p>
        </div>
      </div>

      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About {place.name}</h2>
            <p>{place.detail}</p>

            <h3>Highlights</h3>
            <ul>
              {place.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>

          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>{place.bestMonths}</p>
            </div>

            <div className="box">
              <h4>Quick Facts</h4>
              <p>Sample quick facts can go here (wildlife, access, nearby towns).</p>
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
