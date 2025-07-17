import React from 'react';

const Contact = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow border-0">
          <div className="card-body p-5">
            <h2 className="fw-bold text-primary mb-4 text-center">Get in Touch</h2>
            <p className="text-muted text-center mb-4">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="john@example.com" required />
              </div>
              <div className="col-12">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-5 py-2">
                  <i className="bi bi-send-fill me-2"></i>Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="text-center mt-5">
          <h5 className="fw-semibold text-dark mb-3">Need help or have questions?</h5>
          <p className="text-muted mb-2">
            Reach out via email at <a href="mailto:support@shortly.com" className="text-decoration-none text-primary">support@shortly.com</a>
          </p>
          <p className="text-muted">
            Or visit our <a href="/faq" className="text-decoration-none text-primary">Help Center</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
