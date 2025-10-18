// src/pages/Destinations.js
import React from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import "./Destinations.css";

export default function Destinations() {
  return (
    <main className="destinations-page">
      <header className="dest-hero">
        <div className="dest-hero-inner">
          <h1>Top Destinations in Kenya</h1>
          <p>From the Mara plains to the Indian Ocean — explore our featured destinations.</p>
        </div>
      </header>

      <section className="dest-list section">
        <div className="container">
          <div className="grid">
            {destinations.map((d) => (
              <DestinationCard key={d.id} place={d} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
