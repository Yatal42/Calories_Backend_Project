/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

//Imports
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connecting to mongo db
const connectToDb= async()=>{
    await mongoose.connect(process.env.DB_URL)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports = connectToDb;