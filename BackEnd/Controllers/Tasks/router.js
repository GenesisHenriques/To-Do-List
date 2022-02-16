const express = require('express');

const getAllTasks = require('./getAllTasks');
const createTask = require('./createTask');
const getTaskById = require('./getTaskById');
const removeTask = require('./removeTask');

const router = express.Router({ mergeParams: true });

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.delete('/:id', removeTask);

module.exports = router;
