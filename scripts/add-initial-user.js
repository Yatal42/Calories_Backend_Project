/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

//Imports
const mongoose = require('mongoose');
const User = require('../models/user');
const connectToDb = require('../config/db');

// Connect to MongoDB
connectToDb()
    .then(async () => {
        const user = new User({
            id: 123123,
            first_name: 'moshe',
            last_name: 'israeli',
            birthday: new Date(1990, 0, 10)
        });

        // Save the initial user to the database
        await user.save();
        console.log('User added successfully');

        // Close the connection
        await mongoose.connection.close();
    })
    .catch(err => console.log(err));