const mongoose = require('mongoose');
const Calorie = require('../models/Calorie');
const dbConfig = require('../config/db');
const { v4: uuidv4 } = require('uuid');  // Import UUID

// Connect to MongoDB
mongoose.connect(dbConfig.url)
    .then(async () => {
        const calorieEntries = [
            {
                user_id: 123123,
                year: 2024,
                month: 3,
                day: 21,
                id: uuidv4(),  // Generate unique ID using uuid
                description: 'chocolate in ikea',
                category: 'breakfast',
                amount: 300
            },
            {
                user_id: 123123,
                year: 2024,
                month: 3,
                day: 5,
                id: uuidv4(),  // Generate unique ID using uuid
                description: 'milk',
                category: 'breakfast',
                amount: 6
            }
        ];

        await Calorie.insertMany(calorieEntries);  // Insert the calorie entries into the database
        console.log('Calorie entries added');
        await mongoose.connection.close();  // Close the connection
    })
    .catch(err => console.log(err));