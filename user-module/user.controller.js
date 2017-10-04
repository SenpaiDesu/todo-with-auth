const UserModel = require('./user.model');
const authService = require('../services/auth.service');

const signUp = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    const token = authService.genToken(newUser);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json(error);
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
      
    }
  } catch (error) {
    
  }
}

