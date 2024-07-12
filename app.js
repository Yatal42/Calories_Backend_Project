const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');

const dbConfig = require('./config/db');
const caloriesRoutes = require('./routes/calories');
const reportRoutes = require('./routes/report');
const usersRoutes = require('./routes/users');
const aboutRoutes = require('./routes/about');

const app = express();

// Middleware
app.use(logger('dev')); // For logging HTTP requests
app.use(bodyParser.json()); // For parsing JSON payloads
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing URL-encoded data

// Static file serving (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/addcalories', caloriesRoutes);
app.use('/report', reportRoutes);
app.use('/users', usersRoutes);
app.use('/about', aboutRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;