const express = require('express');
const router = express.Router();

// Example login route
router.post('/login', (req, res) => {
  res.send('Login route works!');
});

module.exports = router; // ✅ MUST be router, NOT { router }
