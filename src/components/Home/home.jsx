import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from '../Footer/footer';

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    background: { color: "#000000" },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: { 
        direction: "none", 
        enable: true, 
        outMode: "bounce", 
        random: false, 
        speed: 1, // Start with a slow speed
        straight: false 
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { random: true, value: 5 },
    },
  };
  
  // Gradually increase the speed of particles over time
  let speed = 1; // Initial speed (slow)
  const maxSpeed = 6; // Max speed
  const increaseInterval = 10000; // Time in ms to increase the speed (10 seconds)
  
  setInterval(() => {
    if (speed < maxSpeed) {
      speed += 0.1; // Increase speed by 0.1
      options.particles.move.speed = speed; // Update the speed dynamically
    }
  }, increaseInterval);
  
  return (
    <><div className="home-container">
    {/* Particle Background */}
    <Particles className="particles-bg" options={options} init={particlesInit} />

    {/* Cards Section */}
    <div className="content">
      <div className="custom-card">
        <div className="card-image">
          <img
            src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card 1"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">What Next?</h5>
          <p className="card-text">
            Explore new opportunities and take the next step in your journey.
          </p>
          <Link to="/getstarted" className="btn btn-primary">
            Get Started &gt;
          </Link>
        </div>
      </div>

      <div className="custom-card">
        <div className="card-image">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card 2"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Documentation</h5>
          <p className="card-text">
            Access comprehensive resources to support your projects.
          </p>
          <Link to="/documentation" className="btn btn-primary">
            Documentation &gt;
          </Link>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  );
}

export default Home;