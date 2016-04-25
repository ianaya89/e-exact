import config from '../config/config';
import User from '../models/user.model';

class UserController {
  create(name, password) {

    let newUser = new User({
      username: name,
      password: password
    });

    console.log(newUser);

    return newUser.saveAsync();
  }
}

export default new UserController();