import React, { useState } from "react";
import "./Contact.css";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (value && !validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || errors.email) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message && !errors.email;

  return (
    <motion.section 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have an idea or a project in mind? Shoot me a message and let's talk!</p>
      </div>

      <div className="contact-card">
        <AnimatePresence>
          {isSubmitted && (
            <motion.div 
              className="success-overlay"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className="success-icon-container">
                <CheckCircle size={40} />
              </div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-msg">
                Thank you for reaching out. I'll get back to you as soon as possible!
              </p>
              <motion.button
                onClick={() => setIsSubmitted(false)}
                className="submit-btn"
                style={{ marginTop: "1.5rem", padding: "0.6rem 1.5rem" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            {errors.email && (
              <span className="error-text">
                <AlertCircle size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder=" "
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid || isSubmitting}
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <Send size={18} />
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};
