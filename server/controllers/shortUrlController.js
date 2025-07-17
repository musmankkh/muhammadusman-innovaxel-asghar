const { ShortUrl } = require('../models/ShortUrl'); // ✅ FIX: Use correct model name
const crypto = require('crypto');

const generateShortCode = () => crypto.randomBytes(3).toString('hex');

const createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    let shortCode;
    let exists = true;
    while (exists) {
      shortCode = generateShortCode();
      exists = await ShortUrl.findOne({ shortCode });
    }
    const newShort = new ShortUrl({ url, shortCode });
    await newShort.save();
    res.status(201).json(newShort);
  } catch (error) {
    console.error("createShortUrl error:", error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const entry = await ShortUrl.findOne({ shortCode });
    if (!entry) return res.status(404).json({ error: 'Not Found' });
    entry.accessCount++;
    await entry.save();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const updateShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const entry = await ShortUrl.findOneAndUpdate(
      { shortCode },
      { url, updatedAt: new Date() },
      { new: true }
    );
    if (!entry) return res.status(404).json({ error: 'Not Found' });
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const result = await ShortUrl.findOneAndDelete({ shortCode }); // ✅ FIX: typo `sfindOneAndDelete`
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
    res.json(entry);
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
