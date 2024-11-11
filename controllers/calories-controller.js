const Calorie = require('../models/calorie');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');

// Controller to add a new calorie entry
exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;

        const user = await User.findOne({ id: user_id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const newCalorie = new Calorie({
            user_id,
            year,
            month,
            day,
            id: uuidv4(),  
            description,
            category,
            amount
        });

        await newCalorie.save();

        res.status(201).send(`Calories of ${newCalorie.description} added successfully`);
    } catch (err) {
        res.status(500).send({ error: err.message }); 
    }
};