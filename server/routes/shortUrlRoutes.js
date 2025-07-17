const express = require('express');
const router = express.Router();
const {
  createShortUrl,
  getOriginalUrl,
  updateShortUrl,
  deleteShortUrl,
  getStats
} = require('../controllers/shortUrlController');

router.post('/', createShortUrl);
router.get('/:shortCode/stats', getStats);
router.get('/:shortCode', getOriginalUrl);
router.put('/:shortCode', updateShortUrl);
router.delete('/:shortCode', deleteShortUrl);


module.exports = router;
