const mongoose = require('mongoose');

// Define the schema for a User
const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);