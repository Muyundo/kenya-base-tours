import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} />
      <div className="tour-card-content">
        <h3>{tour.title}</h3>
        <p className="tour-duration">{tour.duration}</p>
        <p className="tour-description">{tour.description}</p>
        <p className="tour-price">{tour.price}</p>

        {/* Link to destination detail */}
        <Link to={`/destinations/${tour.slug}`} className="tour-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
