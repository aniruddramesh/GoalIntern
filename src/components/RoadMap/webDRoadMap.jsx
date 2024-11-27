import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const resources = [
  { title: "HTML & CSS Basics", description: "Learn the foundation of web development.", path: "/section1" },
  { title: "JavaScript Essentials", description: "Master JavaScript to add interactivity to your web pages.", path: "/javascript" },
  { title: "React Basics", description: "Understand components, state, and props in React.", path: "/react-basics" },
  { title: "Advanced React", description: "Learn hooks, context API, and advanced patterns.", path: "/advanced-react" },
  { title: "Backend Development", description: "Explore Node.js, Express, and databases.", path: "/backend-development" },
  { title: "Full Stack Projects", description: "Build and deploy full-stack applications.", path: "/full-stack-projects" },
];

const Roadmap = () => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(new Array(resources.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);

    const completedCount = updatedCompleted.filter(Boolean).length;
    const newProgress = Math.floor((completedCount / resources.length) * 100);
    setProgress(newProgress);
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundAnimation}></div>
      <h2 style={titleStyle}>Your Creative Learning Roadmap</h2>

      {/* Progress Bar */}
      <div style={progressContainerStyle}>
        <p style={progressTextStyle}>Progress: {progress}%</p>
        <div style={progressBarStyle}>
          <div style={{ ...progressBarFillStyle, width: `${progress}%` }}></div>
        </div>
      </div>

      <div style={roadmapStyle}>
        {resources.map((resource, index) => (
          <Milestone
            key={index}
            index={index}
            resource={resource}
            isChecked={completed[index]}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}
        <div style={lineStyle}></div>
      </div>
    </div>
  );
};

const Milestone = ({ index, resource, isChecked, onCheckboxChange }) => {
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
        <Link to={resource.path} style={linkStyle}>
          <h3 style={resourceTitleStyle}>{resource.title}</h3>
          <p style={resourceDescriptionStyle}>{resource.description}</p>
        </Link>
        <label style={toggleContainerStyle}>
  <input
    type="checkbox"
    checked={isChecked}
    onChange={onCheckboxChange}
    style={hiddenCheckboxStyle}
  />
  <span style={toggleStyle(isChecked)}>
    <div style={toggleCircleStyle}></div>
  </span>
</label>
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
  top:"40px",
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

const progressContainerStyle = {
  width: "80%",
  maxWidth: "600px",
  margin: "20px 0",
};

const progressTextStyle = {
  color: "#fff",
  fontSize: "1.2rem",
  marginBottom: "10px",
  textAlign: "center",
};

const progressBarStyle = {
  width: "100%",
  height: "10px",
  backgroundColor: "#ccc",
  borderRadius: "5px",
  overflow: "hidden",
};

const progressBarFillStyle = {
  height: "100%",
  backgroundColor: "#ff6f61",
  transition: "width 0.3s ease-in-out",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
};

const toggleContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  position: "relative",
  cursor: "pointer",
};

const hiddenCheckboxStyle = {
  opacity: 0,
  position: "absolute",
  pointerEvents: "none",
};

const toggleStyle = (isChecked) => ({
  position: "relative",
  width: "50px",
  height: "25px",
  backgroundColor: isChecked ? "#4caf50" : "#ccc", // Green if checked, gray otherwise
  borderRadius: "50px",
  transition: "all 0.3s ease",
  boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: isChecked ? "flex-end" : "flex-start",
  padding: "0 5px",
});

const toggleCircleStyle = {
  width: "20px",
  height: "20px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
};


const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0% { transform: scale(1.2) translateY(0); }
  50% { transform: scale(1.2) translateY(-20px); }
  100% { transform: scale(1.2) translateY(0); }
}

label input:checked + span {
  background-color: #4caf50;
}

label input:checked + span::after {
  left: calc(100% - 25px);
}

label span::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
`;
document.head.appendChild(style);

export default Roadmap;
