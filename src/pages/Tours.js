import React from "react";
import "./Tours.css";
import ToursList from "../components/ToursList";

function Tours() {
  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="tours-hero">
        <div className="tours-hero-overlay">
          <h1>Our Tours & Safaris</h1>
          <p>
            Explore Kenya’s breathtaking landscapes, wildlife, and culture through our expertly curated tour packages.
          </p>
        </div>
      </section>

      {/* Tours Listing Section */}
      <ToursList />
    </div>
  );
}

export default Tours;
