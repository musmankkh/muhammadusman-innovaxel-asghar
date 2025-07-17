import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-light border-top mt-auto">
    <div className="container py-4">
      <div className="row text-center text-md-start">
        {/* Brand Info */}
        <div className="col-md-4 mb-3">
          <h5 className="text-primary fw-bold">Shortly</h5>
          <p className="text-muted small">
            Simplifying your links and making the web more manageable. Short, sleek, and smart URLs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-3">
          <h6 className="fw-semibold text-dark">Quick Links</h6>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
            <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
            <li><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
          </ul>
        </div>

        {/* Socials or Contact */}
        <div className="col-md-4 mb-3">
          <h6 className="fw-semibold text-dark">Connect</h6>
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <a href="https://facebook.com" className="text-primary fs-5"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com" className="text-info fs-5"><i className="bi bi-twitter"></i></a>
            <a href="https://github.com" className="text-dark fs-5"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="text-center text-muted small">
        &copy; 2025 <strong>Shortly</strong>. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
