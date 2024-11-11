const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/calories-controller');

router.post('/', caloriesController.addCalorie);

module.exports = router;