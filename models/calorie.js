/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const mongoose = require('mongoose');

// Define the schema for a Calorie record
const CalorieSchema = new mongoose.Schema({
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    id: String,  // Use String for UUID
    description: String,
    category: String,
    amount: Number
});

// Create and export the Calorie model
module.exports = mongoose.model('Calorie', CalorieSchema);