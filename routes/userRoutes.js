// routes/storeRoutes.js
const express = require('express');
const router = express.Router();

// Dummy controller placeholder
router.get('/', (req, res) => {
  res.json({ message: 'Store route is working' });
});

module.exports = router;
