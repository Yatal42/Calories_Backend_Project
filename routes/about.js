const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route to get details about the developers
router.get('/', aboutController.getAbout);

module.exports = router;