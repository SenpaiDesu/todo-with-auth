const { Router } = require('express');
const todoCtrl = require('./todo.controller');
const authService = require('../services/auth.service');

const router = Router();

router.post('/', authService.protectRoute, todoCtrl.addItem);
router.get('/', authService.protectRoute, todoCtrl.getList);
router.delete('/:id', authService.protectRoute, todoCtrl.deleteItem);

module.exports = router;