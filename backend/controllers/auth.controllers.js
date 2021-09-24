const User = require('../models/User');

const authController = {};

authController.signup = async (req, res) => {
    const { email, passsword } = req.body;
    const newUser = new User({ email, passsword });

    const registered = await newUser.save();

    if (registered) {
        res.status(201).json({ message: 'User has been created ' });
    } else {
        res.status(202).json({ message: 'error' });
    }
};

module.exports = authController;
