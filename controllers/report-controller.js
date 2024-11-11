const Calorie = require('../models/calorie');

exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;

        const categories = ['breakfast', 'lunch', 'dinner', 'other'];

        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };

        for (let category of categories) {

            const calories = await Calorie.find(
                { user_id, year, month, category },
                'day description amount -_id'
            );

            report[category] = calories;
        }

        res.json(report);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};