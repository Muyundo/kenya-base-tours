import React from "react";
import "./TransportServices.css";

// Image imports (add your images to src/assets/images/transport/ and use these names)
import safariLandCruiser from "../assets/images/transport/safari-land-cruiser.jpg";
import salonCar from "../assets/images/transport/salon-car.jpg";
import safariVan from "../assets/images/transport/safari-van.jpg";
import shuttleBus from "../assets/images/transport/shuttle-bus.jpg";

const transportOptions = [
  {
    name: "Safari Land Cruisers",
    img: safariLandCruiser,
    desc: "Experience the wild in comfort and style with our custom safari Land Cruisers, perfect for game drives and adventure trips.",
  },
  {
    name: "Salon Cars",
    img: salonCar,
    desc: "Ideal for city transfers and business travel, our salon cars offer a smooth and private ride.",
  },
  {
    name: "Safari Van",
    img: safariVan,
    desc: "Our safari vans are spacious, reliable, and great for small groups seeking affordable adventure.",
  },
  {
    name: "22 Seater Shuttle Bus",
    img: shuttleBus,
    desc: "Travel together in comfort with our 22-seater shuttle bus, perfect for large groups and family tours.",
  },
];

function TransportServices() {
  return (
    <div className="transport-services-page">
      <h1 className="transport-title">Transport Services</h1>
      <div className="transport-list">
        {transportOptions.map((option) => (
          <div className="transport-card" key={option.name}>
            <div className="transport-img-container">
              <img
                src={option.img}
                alt={option.name}
                className="transport-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x180?text=Add+Image";
                }}
              />
            </div>
            <h2>{option.name}</h2>
            <p>{option.desc}</p>
          </div>
        ))}
      </div>
      <div className="responsible-tourism">
        <h2>Responsible Tourism</h2>
        <p>
          We support conservation and local communities through ethical travel practices.
        </p>
      </div>
    </div>
  );
}

export default TransportServices;
