module.exports = async (req, res, next) => {
  try {
    return res.status(200).send({ message: 'foii' });
  } catch (error) {
    console.error(error);
    next(error);
  }
};