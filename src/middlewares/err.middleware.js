import config from '../config/config'

export default app => {
  app.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message });
  });
}