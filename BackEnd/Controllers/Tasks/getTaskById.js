const taskService = require('../../Services/tasks/index');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const resService = await taskService.getTaskById(id);
    return res.status(200).send(resService)
  } catch (error) {
    next(error);
  }
};