import React from "react";
import Hero from "../components/Hero";
import ToursSection from "../components/ToursSection";
import DestinationsSection from "../components/DestinationsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";


function Home() {
  return (
    <div>
      <Hero />
      <ToursSection />
      <DestinationsSection />                                    
      <WhyChooseUs />
      <CTA />
    </div>
  );
}

export default Home;
