const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectToDb = async () => {
    if (!process.env.DB_URL) {
        console.error('MongoDB connection string is not defined. Check your environment variables.');
        process.exit(1);
    }

    await mongoose.connect(process.env.DB_URL, {
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1);
        });
}

module.exports = connectToDb;
