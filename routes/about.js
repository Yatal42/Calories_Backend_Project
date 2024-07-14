/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about-controller');

// Route to get details about the developers
router.get('/', aboutController.getAbout);

module.exports = router;