const User = require('../models/user');

exports.getUser = async (req, res) => {
    try {

        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' }); 
        }

        res.json(user);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};