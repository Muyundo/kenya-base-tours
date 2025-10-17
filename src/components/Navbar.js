import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Kenya Base Tours</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/tours" style={styles.link}>Tours</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#006400",
    color: "white",
    padding: "1rem 2rem",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
