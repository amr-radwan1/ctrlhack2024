
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const styles = {
    fullScreen: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #b3e5fc, #e0f7fa)",
      position: "relative" as const,
      overflow: "hidden",
      textAlign: "center" as const,
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
    },
    overlay: {
      
      zIndex: 1,

    },
    contentBox: {
      position: "relative" as const,
      zIndex: 2,
      maxWidth: "600px",
      background: "rgba(255, 255, 255, 0.8)",
      borderRadius: "25px",
      padding: "40px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      animation: "fadeInUp 1.5s ease",
      marginBottom: "20px",
    },
    title: {
      fontSize: "2.3rem",
      fontWeight: 600,
      color: "#0077b6",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#5a5a5a",
      marginBottom: "30px",
    },
    ctaButton: {
      padding: "12px 32px",
      background: "linear-gradient(135deg, #4a7f75, #6bbfb3)",
      border: "none",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "20px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    featuresSection: {
      padding: "40px 20px",
      background: "#f0faff",
      textAlign: "center" as const,
      borderTop: "3px solid #b3e5fc",
    },
    featuresTitle: {
      fontSize: "2rem",
      marginBottom: "40px",
      color: "#0077b6",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    featureCard: {
      background: "#ffffff",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      textAlign: "center" as const,
    },
    featureIcon: {
      fontSize: "2.3rem",
      marginBottom: "10px",
      color: "#4fc3f7",
    },
    featureCardTitle: {
      fontSize: "1.4rem",
      fontWeight: 600,
      color: "#0077b6",
      marginBottom: "10px",
    },
    featureCardText: {
      fontSize: "1rem",
      color: "#666",
    },
    footer: {
      padding: "15px",
      backgroundColor: "#0077b6",
      color: "white",
      width: "100%",
      textAlign: "center" as const,
      fontSize: "0.9rem",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
    },
  };

  return (
    <div style={styles.fullScreen}>
      <div style={styles.overlay}></div>
      <div style={styles.contentBox}>
        <h1 style={styles.title}>AnatomyAR</h1>
        <p style={styles.subtitle}>
          Discover the human body like never before. Dive into an immersive AR
          experience that brings anatomy to life, making learning fun and
          engaging for all ages.
        </p>
        <button style={styles.ctaButton} onClick={() => navigate("/model")}>
          Get Started
        </button>
      </div>

      <section style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Why Choose Anatomy AR?</h2>
        <div style={styles.featuresGrid}>
          {[
            {
              icon: "&#x1F393;",
              title: "For Medical Students",
              description:
                "Access detailed 3D anatomy models that enhance the learning experience, making it easier to understand complex subjects.",
            },
            {
              icon: "&#x1F4D6;",
              title: "For Young Learners",
              description:
                "Engaging AR features make learning accessible and fun, fostering curiosity and understanding in young minds.",
            },
            {
              icon: "&#x1F4BB;",
              title: "Interactive Teaching",
              description:
                "Teachers can guide students with interactive models, adding a dynamic, tech-driven twist to traditional lessons.",
            },
          ].map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div
                style={styles.featureIcon}
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              ></div>
              <h3 style={styles.featureCardTitle}>{feature.title}</h3>
              <p style={styles.featureCardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Anatomy AR. Empowering education with a playful touch.</p>
      </footer>
    </div>
  );
}
