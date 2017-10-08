const { Router } = require('express');
const userCtrl = require('./user.controller');
const authService = require('../services/auth.service');

const router = Router();

router.post('/register', userCtrl.register);
router.post('/login', authService.loginWithEmailAndPassword);
router.get('/me', authService.protectRoute, userCtrl.getProfile);
router.get('/auth-state', authService.checkAuthState);

module.exports = router;