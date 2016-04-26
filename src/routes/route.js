import userRoute from './user.route'
import indexRoute from './index.route'

module.exports = app => {
  app.use('/', userRoute);
  app.use('/', indexRoute);
}