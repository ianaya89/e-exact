import config from '../config/config';
import { verifyAsync } from 'jsonwebtoken';

const nonSecurePaths = ['/create', '/authenticate'];

export default (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (nonSecurePaths.indexOf(req.path) !== -1) {
    return next();
  }

  if (!token) {
    return res.status(401).send({
      message: 'Missing token.',
    });
  }

  return verifyAsync(token, config.AUTH.KEY)
  .then(decoded => {
    req.decoded = decoded;
    next();
  })
  .catch(err => next(err));
};