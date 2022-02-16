const taskService = require('../../Services/Tasks/index');

module.exports = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const resService = await taskService.updateTask(title, description, status, id);

    return res.status(200).send(resService);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
