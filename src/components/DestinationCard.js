// src/components/DestinationCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({ place }) {
  return (
    <div className="destination-card">
      <img src={place.image} alt={place.name} />
      <div className="tour-card-content">
        <h3>{place.name}</h3>
        {place.bestMonths && <p className="tour-duration">Best: {place.bestMonths}</p>}
        <p className="tour-description">{place.short}</p>
        {/* Optionally add price or other info here if available */}
        <Link to={`/destinations/${place.id}`} className="tour-btn">
          Read more →
        </Link>
      </div>
    </div>
  );
}
