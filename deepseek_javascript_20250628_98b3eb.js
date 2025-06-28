module.exports = (err, req, res, next) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message,
      status: status,
      details: err.details
    }
  });
};