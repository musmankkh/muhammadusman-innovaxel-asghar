const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortCode: { type: String, unique: true, required: true },
  accessCount: { type: Number, default: 0 },
}, { timestamps: true });

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = { ShortUrl };
