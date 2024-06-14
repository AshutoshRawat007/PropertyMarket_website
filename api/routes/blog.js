const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({});
const uploadMiddleware = multer({ storage: storage })
const blogController = require('../controllers/blogController');


router.post('/create', uploadMiddleware.any(), blogController.createBlog);
router.get('/', blogController.getAllBlog);
router.get('/:id', blogController.getBlogById);

module.exports =router;
