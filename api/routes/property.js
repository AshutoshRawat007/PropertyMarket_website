const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({});
const uploadMiddleware = multer({ storage: storage });

const propertyController = require('../controllers/propertyController');

router.post('/', uploadMiddleware.any(), propertyController.createProperty);
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getPropertyById);
router.put('/api/properties/:id', propertyController.updatePropertyById);

module.exports = router;
