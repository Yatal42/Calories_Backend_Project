const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');

// Route to add a new calorie entry
router.post('/', caloriesController.addCalorie);

module.exports = router;