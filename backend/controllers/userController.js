// controllers/userController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @desc    Register user (NO HASHING)
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    // Save password directly without hashing
    const user = await User.create({ name, email, password });

    res.status(201).json({ msg: "Registration successful!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Login user (NO HASHING)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login request received:", { email, password });

    const user = await User.findOne({ email });
    console.log("User found in DB:", user);

    if (!user) {
      console.log("No user found for email.");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Direct comparison without bcrypt
    if (user.password !== password) {
      console.log("Plain password does not match");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log("Plain password matched");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (err) {
    console.error("Server error during login:", err.message);
    res.status(500).send("Server Error");
  }
};