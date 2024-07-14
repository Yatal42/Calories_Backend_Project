/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connecting to MongoDB
const connectToDb = async () => {
    if (!process.env.DB_URL) {
        console.error('MongoDB connection string is not defined. Check your environment variables.');
        // Exit the process with failure
        process.exit(1);
    }

    await mongoose.connect(process.env.DB_URL, {
        // Increase connection timeout to 30 seconds
        connectTimeoutMS: 30000,
        // Increase socket timeout to 30 seconds
        socketTimeoutMS: 30000,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            // Exit the process with failure
            process.exit(1);
        });
}

module.exports = connectToDb;
