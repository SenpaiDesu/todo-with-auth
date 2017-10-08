const mongoose = require('mongoose');
const { getBeautifulMongoError } = require('../services/error-handler.service');
const ObjectId = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: ['text is required!']
  },
  ownerId: {
    type: ObjectId,
    ref: 'User'
  }
});

todoSchema.post('save', getBeautifulMongoError);

module.exports = mongoose.model('Todo', todoSchema);