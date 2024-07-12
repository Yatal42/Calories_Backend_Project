const Calorie = require('../models/Calorie');

// Controller to get a report of calorie entries for a specific user, year, and month
exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const categories = ['breakfast', 'lunch', 'dinner', 'other'];
        const report = {};

        // Retrieve and organize calorie entries by category
        for (let category of categories) {
            report[category] = await Calorie.find({ user_id, year, month, category }, 'day description amount -_id');
        }

        res.send(report);  // Respond with the report
    } catch (err) {
        res.status(500).send({ error: err.message });  // Handle any errors
    }
};