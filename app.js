const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');

const caloriesRoutes = require('./routes/calories');
const reportRoutes = require('./routes/report');
const usersRoutes = require('./routes/users');
const aboutRoutes = require('./routes/about');

const app = express();

app.use(bodyParser.json());

connectToDb();

app.use('/addcalories', caloriesRoutes);
app.use('/report', reportRoutes);
app.use('/users', usersRoutes);
app.use('/about', aboutRoutes);

module.exports = app;