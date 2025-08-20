import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark fw-bold" to="/">
            Postcraft
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solutions">Solutions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
            </ul>
            <Link to="/get-started">
              <button className="btn btn-success">Get Started Now</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
