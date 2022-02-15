const express = require('express');

const getAllTasks = require('./getAllTasks');

const router = express.Router();

router.get('/', getAllTasks);

module.exports = router;
