import React from 'react';
import './branch.css';
import { Link } from 'react-router-dom';

function Branch() {
    return (
        <div className="home-page d-flex justify-content-center align-items-center vh-100">
            <div className="cards-container text-center animate-container">
                <h1 className="text-title mb-4">Choose Your Branch</h1>
                <Link to="/option">
                    <button className="btn card-button">CS/IS</button>
                </Link>
                <Link to="/option">
                    <button className="btn card-button">Electrical Branches</button>
                </Link>
                <Link to="/option">
                    <button className="btn card-button">Civil</button>
                </Link>
                <Link to="/option">
                    <button className="btn card-button">Mechanical</button>
                </Link>
            </div>
        </div>
    );
}

export default Branch;
