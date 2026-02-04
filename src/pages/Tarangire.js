import React from "react";
import tarangireImg from "../assets/images/amboseli.jpg"; // Placeholder, update with real image if available
import "./DestinationDetail.css";

export default function Tarangire() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${tarangireImg})` }}>
        <div className="detail-overlay">
          <h1>Tarangire National Park</h1>
          <p>Famous for its elephant herds, ancient baobab trees, and the life-giving Tarangire River.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Tarangire National Park</h2>
            <p>
              The Ngorongoro Crater is the world's largest intact and unfilled volcanic caldera and the Ngorongoro Conservation Area's main tourist attraction. It is the largest and most scenic crater in the Ngorongoro Conservation Area, with a large concentration of wildlife.
            </p>
            <h3>Highlights</h3>
            <ul>
              <li>Endangered species</li>
              <li>Incredible birdlife (over 550 species recorded!)</li>
              <li>Large herds of elephants</li>
              <li>Baobab-dotted landscapes</li>
              <li>Predator sightings: lions, leopards, cheetahs</li>
              <li>Seasonal migration of wildebeest and zebras</li>
            </ul>
            <h3>Best Time to Visit</h3>
            <p>All year (dry season for best wildlife viewing: June - October)</p>
            <h3>Quick Facts</h3>
            <ul>
              <li>The park is named after the Tarangire River, its main water source</li>
              <li>Highest density of elephants in Tanzania</li>
              <li>Area: 2,850 km²</li>
              <li>Located in northern Tanzania, part of the northern safari circuit</li>
              <li>Home to rare species like the fringe-eared oryx and gerenuk</li>
            </ul>
            <h3>Why Visit Tarangire?</h3>
            <p>
              Tarangire offers a classic safari experience with fewer crowds, dramatic landscapes, and exceptional wildlife viewing. The park is a haven for birders and elephant lovers, and its baobab-studded scenery is unforgettable.
            </p>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year (best: June - October)</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <ul>
                <li>Named after the Tarangire River</li>
                <li>Area: 2,850 km²</li>
                <li>Over 550 bird species</li>
                <li>Highest elephant density in Tanzania</li>
              </ul>
            </div>
            <div className="box">
              <h4>Want to visit?</h4>
              <a href="/contact" className="btn">Request a Quote</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
