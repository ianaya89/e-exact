import { sign } from 'jsonwebtoken';
import config from '../config/config';

import User from '../models/user.model';

class UserController {
  create(username, password) {
    username = username.toLowerCase();
    password = password.trim();

    let newUser = new User({
      username: username,
      password: password
    });

    return newUser.saveAsync();
  }

  authenticate(username, password) {
    if (!username || !password) {
      //TODO: add error code
      return next('Authentication failed. Username and password must be provided.');
    }

    return User.findOne({ username: { $regex: new RegExp(username, 'i') } })
      .then(user => {
        if (!user) {
          return Promise.reject('Authentication failed. Username and password do not match.');
        }
        
        return user.comparePassword(password)
          .then(isValidPassword => {
            if (!isValidPassword) {
              return Promise.reject('Authentication failed. Username and password do not match.');
            }

            let token = sign(user, config.AUTH.KEY, {
              expiresIn: config.AUTH.EXPIRATION,
            });

            return Promise.resolve(token);
          });
      });
  }
}

export default new UserController();