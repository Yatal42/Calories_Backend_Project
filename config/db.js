// /*
//   Students:
//
//   - 315788653 -  Tal Yaakobi
//   - 312496821 -  Gil Levkovitch
// */
//
// //Imports
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
//
// // Load environment variables
// dotenv.config();
//
// // Connecting to mongo db
// const connectToDb= async()=>{
//     await mongoose.connect(process.env.DB_URL)
//         .then(() => console.log('MongoDB connected'))
//         .catch(err => console.log(err));
// }
//
// module.exports = connectToDb;

// Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Check if the environment variable is loaded correctly
console.log('DB_URL:', process.env.DB_URL);

// Connecting to MongoDB
const connectToDb = async () => {
    if (!process.env.DB_URL) {
        console.error('MongoDB connection string (DB_URL) is not defined. Check your environment variables.');
        process.exit(1); // Exit the process with failure
    }

    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
        socketTimeoutMS: 30000,  // Increase socket timeout to 30 seconds
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1); // Exit the process with failure
        });
}

module.exports = connectToDb;
