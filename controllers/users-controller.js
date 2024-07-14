/*
  Students:

  - 315788653 -  Tal Yaakobi
  - 312496821 -  Gil Levkovitch
*/

// Imports
const User = require('../models/user');

// Controller to get user details by ID
exports.getUser = async (req, res) => {
    try {

        // Check if the user exists in the database
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });  // Handle user not found
        }

        // Respond with the user details
        res.send(user);
    } catch (err) {
        // Handle any errors
        res.status(500).send({ error: err.message });
    }
};