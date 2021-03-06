const logError = (err) => {
  console.log('ERROR FROM error.middleware.js ---->', err);
};

module.exports.api = (err, req, res, next) => {
  logError(err);
  if (err instanceof Error) {
    err = {
      status: 500,
    };
  }
  res.status(err.status || 500).json({ error: err });
};

module.exports.app = (err, req, res) => {
  logError(err);
  if (err instanceof Error) {
    err = err.toString();
  }
  res.send('Error');
};
