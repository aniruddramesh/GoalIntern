import React from 'react'
import './semester.css';

function Semester() {
    return (
        <div className="container mt-4 ">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <button className="sem-button mb-3">Sem 1</button>
            <button className="sem-button mb-3">Sem 2</button>
            <button className="sem-button mb-3">Sem 3</button>
            <button className="sem-button mb-3">Sem 4</button>
          </div>
  
          {/* Right Column */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <button className="sem-button mb-3">Sem 5</button>
            <button className="sem-button mb-3">Sem 6</button>
            <button className="sem-button mb-3">Sem 7</button>
            <button className="sem-button mb-3">Sem 8</button>
          </div>
        </div>
      </div>

        
    )
}

export default Semester
