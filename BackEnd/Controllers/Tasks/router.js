const express = require('express');

const getAllTasks = require('./getAllTasks');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');

const router = express.Router({ mergeParams: true });

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);

module.exports = router;
