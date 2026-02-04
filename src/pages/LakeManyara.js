import React from "react";
import lakeManyaraImg from "../assets/images/amboseli.jpg"; // Placeholder, update with real image if available
import "./DestinationDetail.css";

export default function LakeManyara() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${lakeManyaraImg})` }}>
        <div className="detail-overlay">
          <h1>Lake Manyara National Park</h1>
          <p>Famous for its tree-climbing lions, flamingos, and diverse landscapes.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Lake Manyara</h2>
            <p>
              The lake's high salt content attracts vast flocks of flamingos, though numbers vary with the seasons. Lake Manyara is a scenic gem, offering a unique blend of lush groundwater forests, open plains, and the dramatic Rift Valley escarpment.
            </p>
            <h3>Highlights</h3>
            <ul>
              <li>Tree-Climbing Lions</li>
              <li>Diverse Ecosystems</li>
              <li>Wildlife Hotspot</li>
              <li>Large flocks of flamingos and other water birds</li>
              <li>Hippos, elephants, giraffes, and baboons</li>
              <li>Stunning Rift Valley views</li>
            </ul>
            <h3>Best Time to Visit</h3>
            <p>All year (dry season for best wildlife viewing: June - October)</p>
            <h3>Quick Facts</h3>
            <ul>
              <li>Seventh-largest lake in Tanzania by surface area</li>
              <li>Area: 330 km² (park), 231 km² (lake)</li>
              <li>Located at the base of the Great Rift Valley escarpment</li>
              <li>Home to over 400 bird species</li>
              <li>Famous for its groundwater forest and hot springs</li>
            </ul>
            <h3>Why Visit Lake Manyara?</h3>
            <p>
              Lake Manyara offers a compact safari experience with incredible biodiversity, dramatic scenery, and unique wildlife encounters. It's a perfect stop on Tanzania's northern safari circuit.
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
                <li>Seventh-largest lake in Tanzania</li>
                <li>Area: 330 km² (park)</li>
                <li>Over 400 bird species</li>
                <li>Tree-climbing lions</li>
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
