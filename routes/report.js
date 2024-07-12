const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Route to get a report of calorie entries
router.get('/', reportController.getReport);

module.exports = router;