const express = require('express');

const getAllTasks = require('./getAllTasks');
const createTask = require('./createTask');

const router = express.Router({ mergeParams: true });

router.get('/', getAllTasks);
router.post('/', createTask);

module.exports = router;
