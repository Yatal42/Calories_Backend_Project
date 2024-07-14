/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

// Route to get user details by ID
router.get('/:id', usersController.getUser);

module.exports = router;