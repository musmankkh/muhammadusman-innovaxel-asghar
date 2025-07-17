import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated short URL
    setShortUrl('https://short.ly/abcd');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow border-0 p-5 text-center">
            <h1 className="fw-bold text-primary mb-3">Simplify Your Links</h1>
            <p className="text-muted mb-4 fs-5">Paste a long URL below to shorten it and make it shareable instantly.</p>

            <form onSubmit={handleSubmit} className="row g-2 justify-content-center">
              <div className="col-md-8">
                <input
                  type="url"
                  className="form-control form-control-lg"
                  placeholder="Enter or paste your long URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 col-sm-6">
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  <i className="bi bi-link-45deg me-2"></i>Shorten
                </button>
              </div>
            </form>

            {shortUrl && (
              <div className="alert alert-success mt-4" role="alert">
                <h5 className="mb-2">Here's your shortened URL:</h5>
                <a href={shortUrl} target="_blank" rel="noreferrer" className="fw-semibold text-decoration-none">
                  {shortUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="text-center mt-5">
        <h4 className="fw-semibold text-dark mb-3">Why Use Shortly?</h4>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Fast, secure, and trackable. With Shortly, you can manage your links effectively while boosting user engagement.
        </p>
      </div>
    </div>
  );
};

export default Home;
