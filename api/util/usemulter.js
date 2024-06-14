const multer = require('multer');
const storage = multer.diskStorage({});
const uploadMiddleware = multer({ storage: storage })

module.export = uploadMiddleware;