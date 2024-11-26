import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './home.css';
import Branch from '../Branch/branch';

function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          padding: '12rem',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: 'url("https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Add your background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity here (0.4 for 40% opacity)
            zIndex: -1, // Make sure the overlay is behind content
          }}
        />

        <div className="custom-card card" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="Card image"
          />
          <div className="card-body">
            <h5 className="card-title">What next ?</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/getstarted" className="btn btn-primary">
              Get Started &gt;
            </Link>
          </div>
        </div>

        <div className="custom-card card" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="Card image"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/documentation" className="btn btn-primary">
              Documentation &gt;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;