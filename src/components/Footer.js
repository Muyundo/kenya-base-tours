import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // update time every second
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const formatTime = (d) => {
    // Example: Tuesday, 8 Apr 2025 — 14:05:09
    const opts = { weekday: "long", day: "numeric", month: "short", year: "numeric" };
    const datePart = d.toLocaleDateString(undefined, opts);
    const timePart = d.toLocaleTimeString();
    return `${datePart} — ${timePart}`;
  };

  const year = now.getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <strong>Kenya Base Tours</strong>
          </div>
          <div className="footer-meta">© Copyright {year} Kenya Base Tours. All rights reserved.</div>
          <div className="footer-dev">Developed by <span className="dev-name">KnightTech Industries</span></div>
        </div>

        <div className="footer-center" aria-live="polite">
          <div className="footer-time-title">Local date & time</div>
          <div className="footer-time">{formatTime(now)}</div>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/tours">Tours</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="socials">
            <a href="#" aria-label="Follow on Facebook">Facebook</a>
            <a href="#" aria-label="Follow on Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
