import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const DomainCard = ({ name, image, path }) => {
  const navigate = useNavigate();

  const floatingEffect = useSpring({
    loop: { reverse: true },
    to: { transform: "translateY(-5px)" },
    from: { transform: "translateY(0px)" },
    config: { duration: 1500 },
  });

  return (
    <animated.button
      style={{
        ...cardStyle,
        backgroundImage: `url(${image})`,
        ...floatingEffect,
      }}
      onClick={() => navigate(path)} // Navigate to the specific domain page
    >
      <div style={overlayStyle}></div>
      <animated.h3 style={cardTitleStyle}>{name}</animated.h3>
    </animated.button>
  );
};

const DomainDisplay = () => {
  return (
    <div style={pageStyle}>
      <h2 style={headerStyle}>Explore Technology Domains</h2>
      <div style={gridContainerStyle}>
        <DomainCard
          name="Web Development"
          image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/webDRoadMap"
        />
        <DomainCard
          name="Data Science"
          image="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/data-science"
        />
        <DomainCard
          name="AI & ML"
          image="https://images.pexels.com/photos/29393025/pexels-photo-29393025/free-photo-of-advanced-robotic-dog-in-indoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/ai-ml"
        />
        <DomainCard
          name="Cybersecurity"
          image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/cybersecurity"
        />
        <DomainCard
          name="Cloud Computing"
          image="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          path="/cloud-computing"
        />
      </div>
    </div>
  );
};

// Styles for the page
const pageStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundImage:
    'url("https://images.pexels.com/photos/23331426/pexels-photo-23331426/free-photo-of-a-green-and-blue-abstract-painting-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  fontFamily: "'Poppins', sans-serif",
};

const headerStyle = {
  textAlign: "center",
  fontSize: "2.5rem",
  marginBottom: "30px",
  color: "#fff",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  width: "100%",
  maxWidth: "1200px",
};

const cardStyle = {
  position: "relative",
  height: "180px",
  borderRadius: "12px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "none",
  padding: "0",
  appearance: "none",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "12px",
};

const cardTitleStyle = {
  position: "relative",
  zIndex: 1,
  fontSize: "1.2rem",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
};

export default DomainDisplay;
