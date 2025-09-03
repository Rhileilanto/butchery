import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="butchery-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Prime Cuts Butchery</h3>
          <p>Your trusted neighborhood butchery for fresh meat and groceries.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +254 275-00660</p>
          <p>📧 info@primecuts.com</p>
          <p>📍 Pipeline, Nairobi</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              📘 Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              📷 Instagram
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
              𝕏 X
            </a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="social-link">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prime Cuts Butchery. All rights reserved.</p>
      </div>
    </footer>
  );
} 