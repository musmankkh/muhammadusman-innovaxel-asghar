import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
    <div className="container">
      {/* Brand */}
      <Link className="navbar-brand fw-bold text-primary fs-3" to="/">
        Shortly
      </Link>

      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav links */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav gap-2">
          <Link className="nav-link text-dark fw-medium px-3 py-1 rounded hover-shadow" to="/">
            Home
          </Link>
          <Link className="nav-link text-dark fw-medium px-3 py-1 rounded hover-shadow" to="/about">
            About
          </Link>
          <Link className="nav-link text-dark fw-medium px-3 py-1 rounded hover-shadow" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
