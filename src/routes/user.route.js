import express from 'express';
import userController from '../controllers/user.controller'
import { validateUser } from '../middlewares/validator.middleware'

const router = express.Router();

router.post('/create', validateUser, (req, res, next) => {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;

  userController.create(username, password)
    .then(user => res.sendStatus(200))
    .catch(next);
});

router.post('/authenticate', validateUser, (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userController.authenticate(username, password)
    .then(token => {
      res
        .status(200)
        .json({ token: token });
    })
    .catch(next);
});

module.exports = router;