// src/components/DestinationCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({ place }) {
  return (
    <article className="dest-card">
      <div className="dest-media">
        <img src={place.image} alt={place.name} />
      </div>
      <div className="dest-body">
        <h3>{place.name}</h3>
        <p className="dest-short">{place.short}</p>
        <div className="dest-meta">
          <span>Best: {place.bestMonths}</span>
          <Link to={`/destinations/${place.id}`} className="dest-link">Read more →</Link>
        </div>
      </div>
    </article>
  );
}
