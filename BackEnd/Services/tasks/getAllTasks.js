const taskModel = require('../../Models/tasks/index');

module.exports = async () => {
  const resModel = await taskModel.getAllTasks();
  return resModel;
};