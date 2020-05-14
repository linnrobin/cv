import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark m-0"
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <Link
        className="nav-item nav-link navbar-brand active"
        to="/"
        style={{ fontWeight: "bold" }}
      >
        ROBIN
      </Link>
      <span className="sr-only">(current)</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/profile/">
            Profile
          </Link>
          <Link className="nav-item nav-link active" to="/education/">
            Education
          </Link>
          <Link className="nav-item nav-link active" to="/experience/">
            Experience
          </Link>
          <Link className="nav-item nav-link active" to="/certification/">
            Certification
          </Link>
          <Link className="nav-item nav-link active" to="/skill/">
            Skill
          </Link>
          <Link className="nav-item nav-link active" to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
