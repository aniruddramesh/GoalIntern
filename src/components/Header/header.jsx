import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useLogin } from '../Auth/LoginContext';
import GoalIntern2 from '../Images/GoalIntern2.png';


function Header() {
  const { isLoggedIn, logout } = useLogin();

  return (
    <div className="container-fluid custom-header py-2 sticky-header">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        {/* Logo */}
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo-icon">
          <img src={GoalIntern2} alt="GoalIntern Logo" className="rounded-logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-3 text-white">Home</Link></li>
          <li><Link to="/contact" className="nav-link px-3 text-light">Contact</Link></li>
          <li><Link to="/about" className="nav-link px-3 text-light">About</Link></li>
          {isLoggedIn && <li><Link to="/branch" className="nav-link px-3 text-light">Learn</Link></li>}
        </ul>

        {/* Search Bar
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-bar" role="search">
          <input
            type="search"
            className="form-control form-control-dark text-bg-light bg-gray-600"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> */}

        {/* Buttons: Login, Signup, Profile, Logout */}
        <div className="text-end">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button type="button" className="btn custom-login me-2">Login</button>
              </Link>
              <Link to="/signup">
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
