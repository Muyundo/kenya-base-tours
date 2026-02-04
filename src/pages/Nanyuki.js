// src/pages/Nanyuki.js
import React from "react";
import nanyukiImg from "../assets/images/nanyuki.jpg";
import mountKenyaImg from "../assets/images/mount-kenya.jpg";
import "./DestinationDetail.css";
import { Link } from "react-router-dom";

export default function Nanyuki() {
  return (
    <main className="destination-detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${nanyukiImg})` }}>
        <div className="detail-overlay">
          <h1>Nanyuki</h1>
          <p>A charming town on the equator, gateway to Mount Kenya, known for its wildlife conservancies and scenic highlands.</p>
        </div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div className="detail-main">
            <h2>About Nanyuki</h2>
            <p>Nanyuki is a vibrant town located right on the equator, serving as the main gateway to Mount Kenya. It is renowned for its wildlife conservancies, beautiful highlands, and unique equator marker. The area is a haven for adventure seekers, nature lovers, and those looking to experience authentic Kenyan culture.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Rhino Sanctuary</li>
              <li>Mount Kenya National Park</li>
              <li>Equator Marker</li>
              <li>Ol Pejeta Conservancy</li>
              <li>Scenic Highlands</li>
              <li>Wildlife Safaris</li>
              <li>Horse Riding</li>
              <li>Local Markets & Culture</li>
            </ul>

            {/* Mount Kenya Feature Section */}
            <div className="mount-kenya-feature" style={{marginTop: 40, background: '#f4f8f6', borderRadius: 12, boxShadow: '0 2px 12px rgba(20,90,50,0.07)', padding: 24}}>
              <h2 style={{color: '#145a32', marginBottom: 12}}>Mount Kenya</h2>
              <img src={mountKenyaImg} alt="Mount Kenya" style={{width: '100%', maxWidth: 480, borderRadius: 10, marginBottom: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}} />
              <h3 style={{margin: '12px 0 6px'}}>Top Destinations in Kenya</h3>
              <p style={{fontWeight: 500, color: '#333'}}>Kenya’s highest peak — trekking, scenic highlands and cool mountain air.</p>
              <ul style={{marginTop: 10}}>
                <li>Stunning trekking routes for all levels</li>
                <li>UNESCO World Heritage Site</li>
                <li>Unique flora and fauna</li>
                <li>Panoramic viewpoints and photography</li>
                <li>Adventure activities: climbing, hiking, camping</li>
              </ul>
              <div style={{marginTop: 16, fontStyle: 'italic', color: '#145a32'}}>Best time to visit: All year</div>
            </div>
          </div>
          <aside className="detail-aside">
            <div className="box">
              <h4>Best time to visit</h4>
              <p>All year</p>
            </div>
            <div className="box">
              <h4>Quick Facts</h4>
              <p>Located on the equator, gateway to Mount Kenya, home to Ol Pejeta Conservancy and rhino sanctuary, adventure activities, and rich local culture.</p>
            </div>
            <div className="box">
              <h4>Want to visit?</h4>
              <Link to="/contact" className="btn">Request a Quote</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
