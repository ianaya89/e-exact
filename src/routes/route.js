import userRoute from './user.route'
import indexRoute from './index.route'

export default app => {
  app.use('/', userRoute);
  app.use('/', indexRoute);
}