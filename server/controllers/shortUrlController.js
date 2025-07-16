const ShortUrl = require('../models/ShortUrl');
const crypto = require('crypto');

const generateShortCode = () => crypto.randomBytes(3).toString('hex');

exports.createShortUrl = async (req, res) => {
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
    res.status(500).json({ error: 'Server Error' });
  }
};
