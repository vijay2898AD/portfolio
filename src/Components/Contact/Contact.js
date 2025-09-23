import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Contact/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 sec
    }
  };

  return (
    <div className="contact-container">
      {/* Heading */}
      <div className="about-mainheading">
        <h1>Contact <span className="yellow">ME</span></h1>
      </div>

      {/* Social Links */}
      <div className="contact-main">
        <div className="contact-sub">
          <Link to="https://github.com/vijay2898AD" target="_blank">
            <span>GitHub: <span className="yellow">vijay2898AD</span></span>
          </Link>
        </div>
        <div className="contact-sub">
          <Link to="https://www.linkedin.com/in/vijay-vipparthi-62737b250/" target="_blank">
            <span>LinkedIn: <span className="yellow">Vijay Vipparthi</span></span>
          </Link>
        </div>
        <div className="contact-sub">
          <span>Email: <span className="yellow">vijayvipparthi8030@gmail.com</span></span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2 className="form-heading">Send Me a Message</h2>
        
        {success && <p className="success-message">Message sent successfully!</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
