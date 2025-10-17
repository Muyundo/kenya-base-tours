import React from "react";
import "./ToursList.css";
import TourCard from "./TourCard";

// Local images (you can replace with your own)
import maraImg from "../assets/images/masai-mara.jpg";
import amboseliImg from "../assets/images/amboseli.jpg";
import sweetwatersImg from "../assets/images/sweetwaters.jpg";
import samburuImg from "../assets/images/samburu.jpg";

function ToursList() {
  const tours = [
    {
      id: 1,
      title: "Masai Mara Wildebeest Migration",
      image: maraImg,
      duration: "3 Days / 2 Nights",
      price: "From $450",
      description:
        "Witness the world-famous Great Migration and experience Kenya’s most iconic safari destination.",
    },
    {
      id: 2,
      title: "Amboseli National Park Adventure",
      image: amboseliImg,
      duration: "2 Days / 1 Night",
      price: "From $300",
      description:
        "Explore stunning views of Mount Kilimanjaro and see herds of elephants in their natural habitat.",
    },
    {
      id: 3,
      title: "Sweetwaters Ol Pejeta Safari",
      image: sweetwatersImg,
      duration: "2 Days / 1 Night",
      price: "From $350",
      description:
        "Visit the famous chimpanzee sanctuary and rhino conservancy in this unforgettable highland safari.",
    },
    {
      id: 4,
      title: "Samburu Cultural & Wildlife Tour",
      image: samburuImg,
      duration: "3 Days / 2 Nights",
      price: "From $480",
      description:
        "Experience the rugged beauty of Northern Kenya and encounter rare wildlife and rich Samburu culture.",
    },
  ];

  return (
    <section className="tours-list">
      <div className="container">
        <h2>Choose Your Adventure</h2>
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToursList;
