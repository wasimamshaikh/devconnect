const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// REGISTER (NO HASHING)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Register Request:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email, password }); // Plain password
    await newUser.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Registration failed" });
  }
});

// LOGIN (NO HASHING)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Login Request:", req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Direct password comparison
    if (user.password !== password) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;