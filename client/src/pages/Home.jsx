import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const [statsCode, setStatsCode] = useState('');
  const [statsCodes, setStatsCodes] = useState('');
  const [fetchData, setFetchData] = useState(null);
  const [statsData, setStatsData] = useState(null);

  const [updateCode, setUpdateCode] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const [deleteCode, setDeleteCode] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const API_BASE = 'http://localhost:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await axios.post(`${API_BASE}/shorten`, { url });
      setShortUrl(`${API_BASE}/${response.data.shortCode}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
    }
  };

  const fetchDatas = async () => {
    setFetchData(null);
    try {
      const response = await axios.get(`${API_BASE}/shorten/${statsCode}`);
      setFetchData(response.data);
    } catch (err) {
      setFetchData(null);
      setError(err.response?.data?.error || 'Stats not found.');
    }
  };

  const StatsDatas = async () => {
    setStatsData(null);
    try {
      const response = await axios.get(`${API_BASE}/shorten/${statsCodes}/stats`);
      setStatsData(response.data);
    } catch (err) {
      setStatsData(null);
      setError(err.response?.data?.error || 'Stats not found.');
    }
  };

  const handleUpdate = async () => {
    setUpdateMessage('');
    try {
      const response = await axios.put(`${API_BASE}/shorten/${updateCode}`, { url: newUrl });
      setUpdateMessage(`✅ Updated Successfully! New URL: ${response.data.url}`);
    } catch (err) {
      setUpdateMessage(`❌ ${err.response?.data?.error || 'Update failed.'}`);
    }
  };

  const handleDelete = async () => {
    setDeleteMessage('');
    try {
      await axios.delete(`${API_BASE}/shorten/${deleteCode}`);
      setDeleteMessage(`🗑️ Short URL '${deleteCode}' deleted successfully.`);
    } catch (err) {
      setDeleteMessage(`❌ ${err.response?.data?.error || 'Delete failed.'}`);
    }
  };

  return (
    <div className="container py-5">
      {/* Main Card */}
      <div className="card shadow-lg border-0 p-5 mb-5">
        <h1 className="display-5 text-primary fw-bold text-center">🔗 Simplify Your Links</h1>
        <p className="lead text-center text-muted">Paste a long URL below to shorten it and make it instantly shareable.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-4">
          <div className="col-md-8">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="https://your-long-url.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4 col-sm-6">
            <button type="submit" className="btn btn-lg btn-primary w-100">
              <i className="bi bi-link-45deg me-2"></i>Shorten URL
            </button>
          </div>
        </form>

        {/* Output */}
        {shortUrl && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Short URL:</strong>{' '}
            <a href={shortUrl} target="_blank" rel="noreferrer" className="text-decoration-none fw-semibold">
              {shortUrl}
            </a>
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-4 text-center">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}
      </div>

      {/* Promo */}
      <div className="text-center my-5">
        <h4 className="fw-bold text-dark">🚀 Why Use Shortly?</h4>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Fast, secure, and trackable. Manage links effortlessly and improve engagement with clean, short URLs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        {/* View Data */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-4 border-start border-info border-4">
            <h5 className="text-info mb-3"><i className="bi bi-info-circle me-2"></i>View Data</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter short code"
              value={statsCode}
              onChange={(e) => setStatsCode(e.target.value)}
            />
            <button className="btn btn-outline-info w-100" onClick={fetchDatas}>Fetch Data</button>

            {fetchData && (
              <div className="mt-3 small text-muted">
                <p><strong>Original URL:</strong> {fetchData.url}</p>
                <p><strong>Short Code:</strong> {fetchData.shortCode}</p>
                <p><strong>Created At:</strong> {new Date(fetchData.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(fetchData.updatedAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>

        {/* View Stats */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-4 border-start border-primary border-4">
            <h5 className="text-primary mb-3"><i className="bi bi-bar-chart-line me-2"></i>View Stats</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter short code"
              value={statsCodes}
              onChange={(e) => setStatsCodes(e.target.value)}
            />
            <button className="btn btn-outline-primary w-100" onClick={StatsDatas}>Fetch Stats</button>

            {statsData && (
              <div className="mt-3 small text-muted">
                <p><strong>Original URL:</strong> {statsData.url}</p>
                <p><strong>Short Code:</strong> {statsData.shortCode}</p>
                <p><strong>Access Count:</strong> {statsData.accessCount}</p>
                <p><strong>Created At:</strong> {new Date(statsData.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(statsData.updatedAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>

        {/* Update */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-4 border-start border-warning border-4">
            <h5 className="text-warning mb-3"><i className="bi bi-pencil-square me-2"></i>Update Short URL</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Short code"
              value={updateCode}
              onChange={(e) => setUpdateCode(e.target.value)}
            />
            <input
              type="url"
              className="form-control mb-2"
              placeholder="New original URL"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <button className="btn btn-outline-warning w-100" onClick={handleUpdate}>Update</button>
            {updateMessage && <div className="mt-2 small text-muted">{updateMessage}</div>}
          </div>
        </div>

        {/* Delete */}
        <div className="col-md-4 mt-4">
          <div className="card h-100 shadow-sm p-4 border-start border-danger border-4">
            <h5 className="text-danger mb-3"><i className="bi bi-trash3 me-2"></i>Delete Short URL</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Short code to delete"
              value={deleteCode}
              onChange={(e) => setDeleteCode(e.target.value)}
            />
            <button className="btn btn-outline-danger w-100" onClick={handleDelete}>Delete</button>
            {deleteMessage && <div className="mt-2 small text-muted">{deleteMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
