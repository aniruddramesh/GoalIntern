import React from 'react'
import './branch.css'
import { Link } from 'react-router-dom'

function Branch() {
    return (
        <div className="home-page d-flex justify-content-center align-items-center vh-100">
            
            <Link to="sem">
            <div className="cards-container text-center">
           
                <button className="btn btn-primary mb-3 card-button">CS/IS</button>
                <button className="btn btn-primary mb-3 card-button">Electrical Branches</button>
                <button className="btn btn-primary mb-3 card-button">Civil</button>
                <button className="btn btn-primary mb-3 card-button">Mechanical</button>
                
            </div>
            </Link>
            
        </div>
    )
}

export default Branch;
