const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const genToken = user => {
  const { id, username } = user;
  return jwt.sign({
    id, 
    username
  }, SECRET_KEY, { expiresIn: 900 });
}

const checkToken = (req, res, next) => {
  try {
    const token = req.get('auth') || req.cookies.token;
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (error) {
    req.error = error; 
    next();
  }
}

const protectRoute = (req, res, next) => {
  if (!req.user || req.error) 
    res.status(401).json({ error: req.error });
  else 
    next();
}

module.exports = {
  genToken,
  checkToken,
  protectRoute
}