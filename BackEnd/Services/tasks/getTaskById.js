const { ObjectId } = require('mongodb');
const formatError = require('../../utils/formatError');
const taskModel = require('../../Models/tasks/index')


module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw formatError(404, 'recipe not found');

  const resModel = await taskModel.getTaskById(id);

  return resModel;
};