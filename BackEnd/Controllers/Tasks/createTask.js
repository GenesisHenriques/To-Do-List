const taskService = require('../../Services/Tasks/index');

module.exports = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const _id = await taskService.createTask({ title, description, status });

    return res.status(200).send({ _id, title, description, status });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
