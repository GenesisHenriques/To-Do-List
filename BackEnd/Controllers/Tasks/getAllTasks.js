const taskService = require('../../Services/Tasks/index');

module.exports = async (req, res, next) => {
  try {
    const resService = await taskService.getAllTasks();

    return res.status(200).send(resService);
  } catch (error) {
    console.error(error);
    next(error);
  }
};