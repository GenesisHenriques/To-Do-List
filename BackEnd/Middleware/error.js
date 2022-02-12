module.exports = (err, req, res, _next) => {
  if (err.code) return res.status(err.code).json({ message: err.message });
  return res.status(501).send();
};