/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

//Imports
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report-controller');

// Route to get a report of calorie entries
router.get('/', reportController.getReport);

module.exports = router;