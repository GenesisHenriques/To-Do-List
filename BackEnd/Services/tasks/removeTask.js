const { ObjectId } = require('mongodb');
const formatError = require('../../utils/formatError');
const taskModel = require('../../Models/tasks/index')


module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw formatError(404, 'recipe not found');

  const { deletedCount } = await taskModel.removeTask(id);

  if (deletedCount > 0) return 'success, task deleted';

  return 'failure, task not deleted';
};