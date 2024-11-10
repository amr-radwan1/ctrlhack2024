// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // Import CSS file for styles

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="full-screen">
      <div className="overlay"></div>
      <div className="content-box">
        <h1 className="title">Welcome to AR Medical Visualization</h1>
        <p className="subtitle">
          Discover the human body like never before. Dive into an immersive AR experience that
          brings anatomy to life, empowering educators and students alike.
        </p>
        <button
          className="cta-button"
          onClick={() => navigate("/model")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Start Experience
        </button>
      </div>

      <section className="features-section">
        <h2 className="features-title">Why Choose Anatomy AR?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1F393;</div>
            <h3>For Medical Students</h3>
            <p>
              Access intricate, detailed 3D anatomy models that enhance the learning experience for
              future healthcare professionals. Study the human body in a way that feels almost
              hands-on.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4D6;</div>
            <h3>For Young Learners</h3>
            <p>
              Engaging AR features make anatomy accessible and fun, fostering curiosity and
              understanding in young minds. Interactive lessons make complex topics approachable.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4BB;</div>
            <h3>Interactive Teaching</h3>
            <p>
              Teachers can guide students with real-time, interactive models, making lessons
              dynamic and captivating. Enhance traditional classroom teaching with a tech-driven
              twist.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Anatomy AR. Redefining Education Through Innovation.</p>
      </footer>
    </div>
  );
};

export default Landing;
