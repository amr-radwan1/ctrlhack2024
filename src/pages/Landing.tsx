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
          brings anatomy to life, making learning fun and engaging for all ages.
        </p>
        <button
          className="cta-button"
          onClick={() => navigate("/model")}
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
              Access detailed 3D anatomy models that enhance the learning experience, making it easier to understand complex subjects.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4D6;</div>
            <h3>For Young Learners</h3>
            <p>
              Engaging AR features make learning accessible and fun, fostering curiosity and understanding in young minds.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4BB;</div>
            <h3>Interactive Teaching</h3>
            <p>
              Teachers can guide students with interactive models, adding a dynamic, tech-driven twist to traditional lessons.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Anatomy AR. Empowering education with a playful touch.</p>
      </footer>
    </div>
  );
};

export default Landing;
