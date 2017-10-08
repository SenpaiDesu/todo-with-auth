const jwt = require('jsonwebtoken');
const UserModel = require('../user-module/user.model');
const { JWT_SECRET_KEY } = require('../config');

const loginWithEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(401).json({ message: 'Missing credentials' });
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Wrong email or password' });
    else if (!user.checkPassword(password))
      return res.status(401).json({ message: 'Wrong email or password' });
    else
      return res.status(200).json(user.attachToken());
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const protectRoute = async (req, res, next) => {
  try {
    const token = req.get('Authentication');
    if (!token)
      return res.status(401).json({ message: 'Token must be provided' });
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    if (!payload)
      return res.status(401).json({ message: 'Invalid token' });
    const user = await UserModel.findById(payload._id);
    if (!user)
      return res.status(401).json({ message: 'Invalid token' });
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const checkAuthState = async (req, res) => {
  try {
    const token = req.get('Authentication');
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    const user = await UserModel.findById(payload._id);
    if (!user)
      return res.status(200).json({ isLoggedIn: false });
    else
    return res.status(200).json({ isLoggedIn: true });
  } catch (error) {
    return res.status(200).json({ isLoggedIn: false });
  }
}

module.exports = {
  loginWithEmailAndPassword,
  protectRoute,
  checkAuthState
}
