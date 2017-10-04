const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: ['text field is required!']
  },
  ownerId: {
    type: ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Todo', todoSchema);