import React from "react";
import Ann from "../assets/IMG_20250627_130343.jpg";
import aboutImage from "../assets/yang-li-9km1IGuKUVk-unsplash.jpg";
import "../App.css";

export default function About() {
  return (
    <main className="about-page">
      <h2>About Prime Cuts Butchery</h2>
      
      <div className="about-hero-image">
        <img src={aboutImage} alt="Butchery Scene" style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }} />
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Prime Cuts Butchery is dedicated to providing the freshest, highest-quality meats and groceries to our community. Our expert butchers and chefs are passionate about great food and customer service. Whether you want to cook at home or enjoy a ready-made meal, we're here to serve you with a smile!
          </p>
          
          <div className="owner-section">
            <div className="owner-info">
              <h3>Meet Our Owner</h3>
              <div className="owner-details">
                <div className="owner-image">
                  <img src={Ann} alt="Butchery Owner" />
                </div>
                <div className="owner-bio">
                  <h4>Ann Nyambura</h4>
                  <p className="owner-title">Master Butcher & Owner</p>
                  <p>
                    With over 15 years of experience in the meat industry, Ann Nyambura has dedicated her life to the art of butchery. Starting as an apprentice at the age of 18, she learned the traditional techniques passed down through generations.
                  </p>
                  <p>
                    Ann's passion for quality meat and commitment to customer satisfaction led her to open Prime Cuts Butchery in 2008. Her expertise in meat selection, cutting techniques, and food safety ensures that every customer receives the finest products available.
                  </p>
                  <p>
                    "Quality is not just a word to us - it's our promise to every customer who walks through our doors. We treat every piece of meat with the respect it deserves, and every customer like family."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="values-section">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>🏆 Quality</h4>
                <p>We source only the finest meats from trusted local farmers and suppliers.</p>
              </div>
              <div className="value-item">
                <h4>🤝 Community</h4>
                <p>We're proud to be part of our local community and support local businesses.</p>
              </div>
              <div className="value-item">
                <h4>🌱 Sustainability</h4>
                <p>We practice sustainable methods and support responsible farming practices.</p>
              </div>
              <div className="value-item">
                <h4>💯 Service</h4>
                <p>Exceptional customer service is at the heart of everything we do.</p>
              </div>
            </div>
          </div>
          
          <p>
            We believe in supporting local farmers, sustainable practices, and bringing people together over delicious food. Thank you for choosing us as your trusted neighborhood butchery!
          </p>
        </div>
      </div>
    </main>
  );
} 