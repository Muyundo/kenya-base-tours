import React from "react";
import Hero from "../components/Hero";
import ToursSection from "../components/ToursSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

function Home() {
  return (
    <div>
      <Hero />
      <ToursSection />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}

export default Home;
