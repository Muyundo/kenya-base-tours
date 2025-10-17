import React from "react";
import "./ToursSection.css";
import masaiMaraImg from "../assets/images/masai-mara.jpg";
import amboseliImg from "../assets/images/amboseli.jpg";
import sweetwatersImg from "../assets/images/sweetwaters.jpg";


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
          <button>Learn More</button>
        </div>

        {/* Amboseli National Park Card */}
        <div className="tour-card">
        <img src={amboseliImg} alt="Amboseli National Park" />

          <h3>Amboseli National Park Safari</h3>
          <p>
            Explore the breathtaking views of Mount Kilimanjaro and encounter
            large herds of elephants in the heart of Amboseli.
          </p>
          <button>Learn More</button>
        </div>

        {/* Sweetwaters Safari Card */}
        <div className="tour-card">
       <img src={sweetwatersImg} alt="Sweetwaters Safari" />

        <h3>Sweetwaters Safari</h3>
        <p>
            Experience the Ol Pejeta Conservancy, home to the last northern white rhinos, chimpanzee sanctuary, and incredible views of Mount Kenya.
        </p>
        <button className="cta-btn">Learn More</button>
        </div>


      </div>
    </section>
  );
}

export default ToursSection;
