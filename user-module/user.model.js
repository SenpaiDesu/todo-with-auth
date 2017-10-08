const mongoose = require('mongoose');
const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');
const { getBeautifulMongoError } = require('../services/error-handler.service');

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/;
const USERNAME_REGEX = /^\w{4,30}$/;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: ['email is required!'],
    lowercase: true,
    match: [EMAIL_REGEX, '{VALUE} is invalid email'],
    unique: true
  },
  password: {
    type: String,
    required: ['password is required!'],
    match: [PASSWORD_REGEX, '{VALUE} is invalid password']
  },
  username: {
    type: String,
    required: ['username is required!'],
    match: [USERNAME_REGEX, '{VALUE} is invalid username'],
    unique: true
  }
});

userSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this.password = hashSync(this.password, 10);
  next();
});

userSchema.post('save', getBeautifulMongoError);

userSchema.methods = {
  getPublicData() {
    return {
      _id: this._id,
      email: this.email,
      username: this.username,
      success: true
    };
  },
  
  toJSON() {
    return this.getPublicData();
  },

  checkPassword(password) {
    return compareSync(password, this.password);
  },

  attachToken() {
    const publicData = this.getPublicData();
    publicData.token = jwt.sign(publicData, JWT_SECRET_KEY);
    return publicData;
  }
}

module.exports = mongoose.model('User', userSchema);