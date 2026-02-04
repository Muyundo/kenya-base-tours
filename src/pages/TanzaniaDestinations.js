import React from "react";
import { Link } from "react-router-dom";
import serengetiImg from "../assets/images/serengeti.jpg";

export default function TanzaniaDestinations() {
  return (
    <main className="destinations-page">
      <header className="dest-hero">
        <div className="dest-hero-inner">
          <h1>Top Destinations in Tanzania</h1>
          <p>Explore the wonders of Tanzania, from the Serengeti to Zanzibar and beyond.</p>
        </div>
      </header>
      <section className="dest-list section">
        <div className="container">
          <div className="tours-container">
           
            <div className="tour-card">
              <img src={serengetiImg} alt="Serengeti National Park" />
              <h3>Serengeti National Park</h3>
              <p>
                The Serengeti is world-renowned for its vast plains, the Great Migration, and abundant wildlife. Experience classic African safari landscapes and unforgettable wildlife encounters.
              </p>
              <Link to="/tanzania-destinations/serengeti" className="tour-btn">Read more →</Link>
            </div>
            <div className="tour-card">
              <img src={require("../assets/images/amboseli.jpg")} alt="Tarangire National Park" />
              <h3>Tarangire National Park</h3>
              <p>
                Famous for its elephant herds, ancient baobab trees, and the life-giving Tarangire River. A haven for birders and wildlife lovers alike.
              </p>
              <Link to="/tanzania-destinations/tarangire" className="tour-btn">Read more →</Link>
            </div>
            <div className="tour-card">
              <img src={require("../assets/images/amboseli.jpg")} alt="Lake Manyara National Park" />
              <h3>Lake Manyara National Park</h3>
              <p>
                Famous for its tree-climbing lions, flamingos, and diverse landscapes. A compact park with dramatic scenery and unique wildlife encounters.
              </p>
              <Link to="/tanzania-destinations/lake-manyara" className="tour-btn">Read more →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
