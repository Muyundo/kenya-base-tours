import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    id: 1,
    title: "Expert Local Guides",
    text: "Experienced, licensed guides who know the parks, wildlife behavior and local culture.",
    emoji: "🧭",
  },
  {
    id: 2,
    title: "Safety & Comfort",
    text: "We prioritize your safety with vetted accommodations, reliable transport and emergency plans.",
    emoji: "🛡️",
  },
  {
    id: 3,
    title: "Tailor-made Trips",
    text: "Custom itineraries to match your interests, schedule and budget — flexible and personal.",
    emoji: "🗺️",
  },
  {
    id: 4,
    title: "Responsible Tourism",
    text: "We support conservation and local communities through ethical travel practices.",
    emoji: "🌱",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title">Why Choose Kenya Base Tours</h2>
        <p className="why-intro">
          We blend expert knowledge, safety, and genuine care for wildlife & communities to deliver
          unforgettable experiences.
        </p>

        <ul className="why-grid">
          {reasons.map((r) => (
            <li key={r.id} className="why-card">
              <div className="why-icon" aria-hidden="true">{r.emoji}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-text">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
