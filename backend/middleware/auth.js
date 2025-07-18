const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, "mysecret"); // use process.env.JWT_SECRET if configured
    req.user = decoded.id; // or req.user = decoded if you need full payload
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};