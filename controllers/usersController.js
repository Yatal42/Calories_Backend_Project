const User = require('../models/User');

// Controller to get user details by ID
exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });  // Handle user not found
        }
        res.send(user);  // Respond with the user details
    } catch (err) {
        res.status(500).send({ error: err.message });  // Handle any errors
    }
};