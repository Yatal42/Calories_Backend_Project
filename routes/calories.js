/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/calories-controller');

// Route to add a new calorie entry
router.post('/', caloriesController.addCalorie);

module.exports = router;