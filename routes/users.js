const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to get user details by ID
router.get('/:id', usersController.getUser);

module.exports = router;