const Calorie = require('../models/Calorie');
const { v4: uuidv4 } = require('uuid');

// Controller to add a new calorie entry
exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;
        const newCalorie = new Calorie({
            user_id,
            year,
            month,
            day,
            id: uuidv4(),  // Generate unique ID using uuid
            description,
            category,
            amount
        });
        await newCalorie.save();  // Save the new calorie entry to the database
        res.status(201).send(newCalorie);  // Respond with the created entry
    } catch (err) {
        res.status(500).send({ error: err.message });  // Handle any errors
    }
};