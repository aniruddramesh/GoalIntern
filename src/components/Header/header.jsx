import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useLogin } from '../Auth/LoginContext';
function Header() {
  const { isLoggedIn, logout } = useLogin(); // Get login state and logout function

  return (
    <div className="container-fluid custom-header py-2 sticky-header">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo-icon">
          <svg className="bi me-2" width="40" height="90" role="img" aria-label="Bootstrap">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
    
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-3 text-white">Home</a></li>
          <li><a href="#" className="nav-link px-3 text-light">Contact</a></li>
          <li><a href="#" className="nav-link px-3 text-light">About</a></li>
          {/* Show Learn link only if logged in */}
          {isLoggedIn && <li><a href="#" className="nav-link px-3 text-light">Learn</a></li>}
        </ul>
    
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-bar" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light bg-gray-600" placeholder="Search..." aria-label="Search" />
        </form>
    
        <div className="text-end">
          {/* Render Login/Signup buttons if not logged in, or Profile/Logout if logged in */}
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button type="button" className="btn custom-login me-2">Login</button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn custom-signup">Sign-up</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                <button type="button" className="btn custom-login me-2">Profile</button>
              </Link>
              <button type="button" className="btn custom-login" onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
