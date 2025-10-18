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
              <li><strong>📞 Phone:</strong> +254 115 668 995</li>
              <li><strong>✉️ Email:</strong> info@kenyabasetours.com</li>
              <li><strong>⏰ Office Hours:</strong> Mon – Sat, 8:00am – 6:00pm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <iframe
          title="Kenya Base Tours Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821943177858!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b93c6e8a37%3A0xf1a5cdd2cfb857!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1707312345678!5m2!1sen!2ske"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
