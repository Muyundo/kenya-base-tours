// src/components/ToursSection.js
import React from "react";
import "./ToursSection.css";

function ToursSection() {
  const tours = [
    {
      id: 1,
      name: "Masai Mara Safari",
      image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b",
      description: "Experience the Great Migration and Kenya’s iconic wildlife.",
    },
    {
      id: 2,
      name: "Amboseli National Park",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
      description: "Enjoy breathtaking views of Mount Kilimanjaro and elephant herds.",
    },
    {
      id: 3,
      name: "Lake Nakuru Adventure",
      image: "https://images.unsplash.com/photo-1589391886645-d51941b3c1f8",
      description: "Famous for flamingos, rhinos, and scenic landscapes.",
    },
  ];

  return (
    <section className="tours-section">
      <h2>Popular Tours</h2>
      <div className="tours-container">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToursSection;
