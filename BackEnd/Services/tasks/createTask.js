const { validationCreateTask } = require('../../utils/validationWithJoi');
const formatError = require('../../utils/formatError');
const modelTasks = require('../../Models/tasks/index')

module.exports = async (data) => {
  const hasError = validationCreateTask(data);

  if (hasError) throw formatError(400, hasError.message);

  const { insertedId } = await modelTasks.createTask(data);

  return insertedId;
};