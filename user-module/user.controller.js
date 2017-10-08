const UserModel = require('./user.model');
const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(200).json(newUser.attachToken());
  } catch (error) {
    res.status(400).json(error);
  }
}

const getProfile = (req, res) => {
  return res.status(200).json(req.user);
}

module.exports = {
  register,
  getProfile
}
