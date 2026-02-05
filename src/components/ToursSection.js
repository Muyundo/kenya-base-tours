import React from "react";
import { Link } from "react-router-dom";

import "./ToursSection.css";

import masaiMaraImg from "../assets/images/masai-mara.jpg";
import amboseliImg from "../assets/images/amboseli.jpg";

import coastImg from "../assets/images/coast.jpg";


function ToursSection() {
  return (
    <section className="tours-section">
      <h2>Popular Tours</h2>
      <div className="tours-container">

        {/* Maasai Mara Card */}
        <div className="tour-card">
         <img src={masaiMaraImg} alt="Masai Mara" />

          <h3>Masai Mara Wildebeest Migration</h3>
          <p>
            Experience the world-famous wildebeest migration and witness the
            great herds cross the Mara River in one of Africa’s most iconic
            destinations.
          </p>
          <Link to={`/destinations/masai-mara`} className="tour-btn">Learn More</Link>
        </div>


          {/* Kenya Coast (Diani/Watamu) Card */}
          <div className="tour-card">
            <img src={coastImg} alt="Kenya Coast (Diani/Watamu)" />
            <h3>Kenya Coast (Diani/Watamu)</h3>
            <p>
              Relax on white sandy beaches, swim in turquoise waters, and immerse yourself in Swahili culture in Diani, Watamu, and Malindi. Perfect for a tropical getaway.
            </p>
            <Link to="/destinations/kenya-coast" className="tour-btn">Learn More</Link>
          </div>
        {/* Amboseli National Park Card */}
        <div className="tour-card">
        <img src={amboseliImg} alt="Amboseli National Park" />

          <h3>Amboseli National Park Safari</h3>
          <p>
            Explore the breathtaking views of Mount Kilimanjaro and encounter
            large herds of elephants in the heart of Amboseli.
          </p>
          <Link to={`/destinations/amboseli`} className="tour-btn">Learn More</Link>
        </div>

        {/* Sweetwaters Safari Card */}
        <div className="tour-card">
        <img src={require("../assets/images/samburu.jpg")} alt="Samburu National Reserve" />

          <h3>Samburu Safari</h3>
        <p>
          Discover the raw beauty of Samburu National Reserve, home to rare species such as 
          the Grevy’s zebra, reticulated giraffe, and Somali ostrich. Experience the serenity 
          of the Ewaso Nyiro River and the rich culture of the Samburu people.
        </p>
          <Link to={`/destinations/samburu`} className="tour-btn">Learn More</Link>
        </div>


      </div>
    </section>
  );
}

export default ToursSection;
