const TodoModel = require('./todo.model');

const addItem = async (req, res) => {
  try {
    await TodoModel.create(req.body);
    const todoList = await TodoModel.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(400).json(error);
  }
}

const getList = async (req, res) => {
  try {
    const todoList = await TodoModel.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteItem = async (req, res) => {
  try {
    await TodoModel.findByIdAndRemove(req.params.id);
    const todoList = await TodoModel.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  addItem,
  getList,
  deleteItem
}