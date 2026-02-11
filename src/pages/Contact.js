import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>
            Have questions or ready to start your journey? Reach out to Kenya Base Tours today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-container">
          {/* Form */}
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <h2>Our Contact Details</h2>
            <p>
              We’d love to hear from you! Whether you’re planning a safari, have a question,
              or want to collaborate — reach out through the details below.
            </p>
            <ul>
              <li><strong>📍 Address:</strong> Nairobi, Kenya</li>
              <li><strong>📞 Phone:</strong> +254 115 668 995 | +254 721 419 524</li>
              <li><strong>✉️ Email:</strong> info@kenyabasetours.com</li>
              <li><strong>⏰ Office Hours:</strong> Mon – Sat, 8:00am – 6:00pm</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
