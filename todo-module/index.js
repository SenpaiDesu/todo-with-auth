const { Router } = require('express');
const todoCtrl = require('./todo.controller');

const router = Router();

router.post('/', todoCtrl.addItem);
router.get('/', todoCtrl.getList);
router.delete('/:id', todoCtrl.deleteItem);

module.exports = router;