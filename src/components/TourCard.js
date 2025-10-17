import React from "react";

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} />
      <div className="tour-info">
        <h3>{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
        <div className="tour-meta">
          <span>{tour.duration}</span>
          <span className="tour-price">{tour.price}</span>
        </div>
        <a href="#" className="tour-btn">View Details</a>
      </div>
    </div>
  );
}

export default TourCard;
