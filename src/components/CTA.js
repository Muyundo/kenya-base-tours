import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleQuote = () => {
    navigate("/contact");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // TODO: replace with API call to save email on server
    setSubscribed(true);
    setEmail("");
    // quick UX confirmation
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner">
        <div className="cta-left">
          <h2 id="cta-heading">Ready to plan your Kenya adventure?</h2>
          <p>
            Tell us what you want — dates, budget, special requests — and we’ll create a personalised itinerary.
          </p>

          <div className="cta-actions">
            <button className="cta-primary" onClick={handleQuote}>
              Get a Quote
            </button>

            <button
              className="cta-secondary"
              onClick={() => window.open("mailto:info@kenyabasetours.com")}
            >
              Email Us
            </button>
          </div>
        </div>

        <div className="cta-right" aria-hidden={subscribed ? "true" : "false"}>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <label htmlFor="subscribe-email" className="sr-only">Email address</label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="Your email for tips & offers"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>

          {subscribed && <div className="subscribe-confirm">Thanks — we’ll be in touch!</div>}
        </div>
      </div>
    </section>
  );
}
