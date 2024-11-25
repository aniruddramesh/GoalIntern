import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const resources = [
  { title: "HTML & CSS Basics", description: "Learn the foundation of web development." },
  { title: "JavaScript Essentials", description: "Master JavaScript to add interactivity to your web pages." },
  { title: "React Basics", description: "Understand components, state, and props in React." },
  { title: "Advanced React", description: "Learn hooks, context API, and advanced patterns." },
  { title: "Backend Development", description: "Explore Node.js, Express, and databases." },
  { title: "Full Stack Projects", description: "Build and deploy full-stack applications." },
];

const Roadmap = () => {
  return (
    <div style={containerStyle}>
      <div style={backgroundAnimation}></div>
      <h2 style={titleStyle}>Your Creative Learning Roadmap</h2>
      <div style={roadmapStyle}>
        {resources.map((resource, index) => (
          <Milestone key={index} index={index} resource={resource} />
        ))}
        <div style={lineStyle}></div>
      </div>
    </div>
  );
};

const Milestone = ({ index, resource }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={{ ...milestoneStyle, ...animation }}>
      <div style={circleStyle}>{index + 1}</div>
      <div style={contentStyle}>
        <h3 style={resourceTitleStyle}>{resource.title}</h3>
        <p style={resourceDescriptionStyle}>{resource.description}</p>
      </div>
    </animated.div>
  );
};

// Styles
const containerStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px 20px",
  minHeight: "100vh",
  fontFamily: "'Poppins', sans-serif",
  background: "linear-gradient(to bottom right, #4e54c8, #8f94fb)",
  overflow: "hidden",
};

const titleStyle = {
  fontSize: "3rem",
  marginBottom: "50px",
  color: "#fff",
  textAlign: "center",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
};

const roadmapStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  width: "80%",
  maxWidth: "1200px",
};

const milestoneStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "20px 30px",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  width: "100%",
  transition: "all 0.3s ease-in-out",
};

const circleStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#ff6f61",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
};

const resourceTitleStyle = {
  fontSize: "1.8rem",
  margin: 0,
  color: "#333",
  fontWeight: "bold",
};

const resourceDescriptionStyle = {
  fontSize: "1rem",
  margin: 0,
  color: "#555",
};

const lineStyle = {
  position: "absolute",
  top: "60px",
  left: "30px",
  width: "4px",
  height: "calc(100% - 60px)",
  backgroundColor: "#ccc",
};

const backgroundAnimation = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.1))`,
  animation: "float 15s infinite",
  zIndex: -1,
  transform: "scale(1.2)",
  filter: "blur(80px)",
};

// Adding @keyframes in JavaScript
const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0% { transform: scale(1.2) translateY(0); }
  50% { transform: scale(1.2) translateY(-20px); }
  100% { transform: scale(1.2) translateY(0); }
}`;
document.head.appendChild(style);

export default Roadmap;
