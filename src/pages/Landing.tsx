// src/pages/Landing.tsx
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="full-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Welcome to AR Medical Visualization
      </h1>
      <button
        onClick={() => navigate("/model")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          backgroundColor: "#3BDB9B",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Start Experience
      </button>
    </div>
  );
};

export default Landing;
