import React from 'react';

const About = () => (
  <div className="container py-5">
    {/* Top Section */}
    <div className="row align-items-center">
      <div className="col-lg-12 text-center mb-5">
        <h2 className="fw-bold text-primary mb-3">About Shortly</h2>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '800px' }}>
          Shortly is a free, fast, and simple URL shortener built to help you manage and share long links with ease.
          We aim to make your links cleaner, more trackable, and more meaningful—whether you're sharing them for business,
          marketing, or personal use.
        </p>
      </div>
    </div>

    {/* Features Section */}
    <div className="row g-4 text-center">
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Easy</h5>
          <p className="text-muted">ShortURL is easy and fast, enter the long link to get your shortened link.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Shortened</h5>
          <p className="text-muted">Use any link, no matter what size. ShortURL always shortens.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Secure</h5>
          <p className="text-muted">Fast and secure with HTTPS protocol and data encryption.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Statistics</h5>
          <p className="text-muted">Track the number of clicks your shortened URLs receive.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Reliable</h5>
          <p className="text-muted">Malicious links (spam, viruses, malware) are automatically blocked.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="fw-semibold text-primary mb-2">Devices</h5>
          <p className="text-muted">Fully compatible with smartphones, tablets, and desktops.</p>
        </div>
      </div>
    </div>

  </div>


);

export default About;
