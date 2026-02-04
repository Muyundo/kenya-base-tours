

import React from "react";
import { Link } from "react-router-dom";
import destinationsData from "../data/destinations";
import "./DestinationsSection.css";

function DestinationsSection() {
  const topDestinations = destinationsData.slice(0, 6);
  return (
    <section className="destinations-section">
      <h2>Top Destinations</h2>
      <div className="tours-container">
        {topDestinations.map((place) => (
          <div className="tour-card" key={place.id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.short}</p>
            <Link to={`/destinations/${place.id}`} className="tour-btn">Learn More</Link>
          </div>
        ))}
        <div className="tour-card view-more-card">
          <Link to="/destinations" className="tour-btn">
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection;
