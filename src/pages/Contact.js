import React from "react";
//import "./PageStyles.css"; // optional, if you want to reuse some page styles

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out for inquiries or tour bookings.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@kenyabasetours.com</p>
        <p><strong>Phone:</strong> +254 700 123 456</p>
        <p><strong>Address:</strong> Nairobi, Kenya</p>
      </div>
    </div>
  );
}

export default Contact;
