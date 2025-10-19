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
import DestinationDetail from "./pages/DestinationDetail";

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
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
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
