export const erroHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    succes: false,
    message: err.message,
  });
};
