// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // 👈 new loader import

import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import MasaiMara from "./pages/MasaiMara";
import Amboseli from "./pages/Amboseli";
import LakeNakuru from "./pages/LakeNakuru";
import Samburu from "./pages/Samburu";
import Coast from "./pages/Coast";
import NorthCoast from "./pages/NorthCoast";
import Nanyuki from "./pages/Nanyuki";
import DestinationDetail from "./pages/DestinationDetail";
import TanzaniaDestinations from "./pages/TanzaniaDestinations";
import Serengeti from "./pages/Serengeti";
import Tarangire from "./pages/Tarangire";
import LakeManyara from "./pages/LakeManyara";

// 👇 Create a wrapper so we can use useLocation()
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Loader lasts ~1s
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />} {/* 👈 show loader on route change */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/masai-mara" element={<MasaiMara />} />
          <Route path="/destinations/amboseli" element={<Amboseli />} />
          <Route path="/destinations/lake-nakuru" element={<LakeNakuru />} />
          <Route path="/destinations/samburu" element={<Samburu />} />
          <Route path="/destinations/coast" element={<Coast />} />
          <Route path="/destinations/north-coast" element={<NorthCoast />} />
          <Route path="/destinations/nanyuki" element={<Nanyuki />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/tanzania-destinations" element={<TanzaniaDestinations />} />
          <Route path="/tanzania-destinations/serengeti" element={<Serengeti />} />
          <Route path="/tanzania-destinations/tarangire" element={<Tarangire />} />
          <Route path="/tanzania-destinations/lake-manyara" element={<LakeManyara />} />
          <Route path="/destinations/tanzania-destinations" element={<TanzaniaDestinations />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// 👇 Router wrapper stays outside
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
