import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './home.css';
import Branch from '../Branch/branch';

function Home() {
  return (
    <>
      <div className="display-flex" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', padding: '12rem' ,alignItems:'center'}}>
        <div className="custom-card card" style={{ width: '18rem' }}>
          <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">What next ?</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            {/* Use Link to redirect */}
            <Link to="/getstarted" className="btn btn-primary">
              Get Started &gt;
            </Link>
          </div>
        </div>

        <div className="custom-card card" style={{ width: '18rem' }}>
          <img src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            {/* Use Link to redirect */}
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
