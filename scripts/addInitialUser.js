const mongoose = require('mongoose');
const User = require('../models/User');
const dbConfig = require('../config/db');

// Connect to MongoDB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        const user = new User({
            id: 123123,
            first_name: 'moshe',
            last_name: 'israeli',
            birthday: new Date(1990, 0, 10)  // January 10th, 1990
        });
        await user.save();  // Save the initial user to the database
        console.log('User added');
        mongoose.connection.close();  // Close the connection
    })
    .catch(err => console.log(err));