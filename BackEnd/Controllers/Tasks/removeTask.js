const taskService = require('../../Services/tasks/index');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const resService = await taskService.removeTask(id);

    return res.status(200).send({ menssage: resService });
  } catch (error) {
    next(error);
  }
};