const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({});
const uploadMiddleware = multer({ storage: storage });
const authController = require('../controllers/authController');

router.post('/register', uploadMiddleware.any(), authController.register);
router.post('/login', authController.login);
router.get('/profile', authController.getProfile);
router.post('/logout', authController.logout);

module.exports = router;
