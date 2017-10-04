const mongoose = require('mongoose');
const { hashSync } = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: ['username field is required!'],
    unique: true
  },
  password: {
    type: String,
    required: ['password field is required!']
  }
});

userSchema.pre('save', next => {
  
})

module.exports = mongoose.model('User', userSchema);