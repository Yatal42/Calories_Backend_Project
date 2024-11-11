const mongoose = require('mongoose');
const User = require('../models/user');
const connectToDb = require('../config/db');

connectToDb()
    .then(async () => {
        const user = new User({
            id: 123123,
            first_name: 'moshe',
            last_name: 'israeli',
            birthday: new Date(1990, 0, 10)
        });

        await user.save();
        console.log('User added successfully');

        await mongoose.connection.close();
    })
    .catch(err => console.log(err));