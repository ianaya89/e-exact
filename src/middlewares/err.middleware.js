import config from '../config/config'

export default app => {
  app.use((err, req, res, next) => {
    res
      .status(err.satus || 500)
      .json({
        message: err.message,
        error: config.env === 'development' ? err : {}
      });
  });
}