const express = require('express');
const router = express.Router();
const userController = require('../controllers/agentController');

router.get('/', userController.getAgents); // Use getAgents function

router.get('/:id', userController.getAgentDetails); // Use getAgentDetails function

module.exports = router;
