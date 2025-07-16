import React from 'react';

const Contact = () => (
  <div className="container py-5">
    <h2>Contact Us</h2>
    <form className="row g-3">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Your Name" required />
      </div>
      <div className="col-md-6">
        <input type="email" className="form-control" placeholder="Your Email" required />
      </div>
      <div className="col-12">
        <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
);

export default Contact;
