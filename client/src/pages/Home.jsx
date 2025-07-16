import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic
    setShortUrl('https://short.ly/abcd');
  };

  return (
    <div className="container py-5 text-center">
      <h1 className="mb-4">Shorten Your URL</h1>
      <form onSubmit={handleSubmit} className="row justify-content-center g-2">
        <div className="col-md-6">
          <input
            type="url"
            className="form-control"
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Shorten</button>
        </div>
      </form>

      {shortUrl && (
        <div className="mt-4">
          <h5>Shortened URL:</h5>
          <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
};

export default Home;
