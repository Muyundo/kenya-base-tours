import React from "react";
import { Link } from "react-router-dom"; // ✅ import this
import "./DestinationsSection.css";

import nanyukiImg from "../assets/images/nanyuki.jpg";
import mountKenyaImg from "../assets/images/mount-kenya.jpg";
import samburuImg from "../assets/images/samburu.jpg";
import coastImg from "../assets/images/coast.jpg";

function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Nanyuki",
      image: nanyukiImg,
      description:
        "A charming town on the equator, gateway to Mount Kenya, known for its wildlife conservancies and scenic highlands.",
    },
    {
      id: 2,
      name: "Mount Kenya",
      image: mountKenyaImg,
      description:
        "Kenya’s highest peak and Africa’s second tallest mountain — ideal for climbers, hikers, and nature lovers.",
    },
    {
      id: 3,
      name: "Samburu",
      image: samburuImg,
      description:
        "An authentic northern Kenya experience — unique wildlife, stunning landscapes, and vibrant Samburu culture.",
    },
    {
      id: 4,
      name: "Kenya Coast",
      image: coastImg,
      description:
        "White sandy beaches, turquoise waters, and Swahili culture await you in Diani, Watamu, and Malindi.",
    },
  ];

  return (
    <section className="destinations-section">
      <h2>Top Destinations in Kenya</h2>

      <div className="destinations-grid">
        {destinations.map((place) => (
          <div className="destination-card" key={place.id}>
            <img src={place.image} alt={place.name} />
            <div className="destination-info">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Add this button here */}
      <div className="destinations-btn-wrapper">
        <Link to="/destinations" className="destinations-btn">
          View All Destinations
        </Link>
      </div>
    </section>
  );
}

export default DestinationsSection;
