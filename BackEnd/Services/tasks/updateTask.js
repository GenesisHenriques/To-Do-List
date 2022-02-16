const { validationCreateTask } = require('../../utils/validationWithJoi');
const formatError = require('../../utils/formatError');
const modelTasks = require('../../Models/tasks/index');
const { ObjectId } = require('mongodb');

module.exports = async (title, description, status, id) => {
  const hasError = validationCreateTask({ title, description, status });
  if (hasError) throw formatError(400, hasError.message);

  if (!ObjectId.isValid(id)) throw formatError(404, 'invalid id');

  const hasId = await modelTasks.getTaskById(id);
  if (!hasId) throw formatError(404, 'task not found');


  const resService = await modelTasks.updateTask(id, title, description, status);

  return { id, title, description, status };
};