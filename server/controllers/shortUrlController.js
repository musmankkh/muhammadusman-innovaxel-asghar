const { ShortUrl } = require('../models/ShortUrl');
const crypto = require('crypto');
const validator = require('validator');

const generateShortCode = () => crypto.randomBytes(3).toString('hex');

const createShortUrl = async (req, res) => {
  const { url } = req.body;

  // Validate input
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  if (!validator.isURL(url, { require_protocol: true })) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    let shortCode;
    let exists = true;

    // Ensure uniqueness of shortCode
    while (exists) {
      shortCode = generateShortCode();
      exists = await ShortUrl.findOne({ shortCode });
    }


    const newShort = new ShortUrl({ url, shortCode });
    await newShort.save();


    res.status(201).json({
      id: newShort._id.toString(),
      url: newShort.url,
      shortCode: newShort.shortCode,
      createdAt: newShort.createdAt,
      updatedAt: newShort.updatedAt,
    });
  } catch (error) {
    console.error("createShortUrl error:", error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const entry = await ShortUrl.findOne({ shortCode });

    if (!entry) {
      return res.status(404).json({ error: 'Not Found' });
    }

    entry.accessCount += 1;
    await entry.save();

    res.status(200).json({
      id: entry._id.toString(),
      url: entry.url,
      shortCode: entry.shortCode,
      accessCount: entry.accessCount,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    });
  } catch (error) {
    console.error("getOriginalUrl error:", error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const updateShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  if (!validator.isURL(url, { require_protocol: true })) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    const updatedEntry = await ShortUrl.findOneAndUpdate(
      { shortCode },
      { url, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.status(200).json({
      id: updatedEntry._id.toString(),
      url: updatedEntry.url,
      shortCode: updatedEntry.shortCode,
      createdAt: updatedEntry.createdAt,
      updatedAt: updatedEntry.updatedAt,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const result = await ShortUrl.findOneAndDelete({ shortCode });
    if (!result) return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const getStats = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const entry = await ShortUrl.findOne({ shortCode });
    if (!entry) return res.status(404).json({ error: 'Not Found' });
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  createShortUrl,
  updateShortUrl,
  getOriginalUrl,
  getStats,
  deleteShortUrl,
};
