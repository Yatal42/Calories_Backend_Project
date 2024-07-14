/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

//Imports
const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');

const caloriesRoutes = require('./routes/calories');
const reportRoutes = require('./routes/report');
const usersRoutes = require('./routes/users');
const aboutRoutes = require('./routes/about');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the database
connectToDb();

// Routes
app.use('/addcalories', caloriesRoutes);
app.use('/report', reportRoutes);
app.use('/users', usersRoutes);
app.use('/about', aboutRoutes);

// Export the app
module.exports = app;