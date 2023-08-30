const User = require('../models/User');

// Controller for user registration
exports.registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for user login
exports.loginUser = async (req, res) => {
  try {
    // authenticate user credentials
    // Generate a JWT token and send it in the response
    res.status(200).json({ token, user: { id, username, email } });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
