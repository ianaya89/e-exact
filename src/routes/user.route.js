import express from 'express';
import userController from '../controllers/user.controller'

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello world!');
});

router.post('/create', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userController.create(username, password)
    .then((user) => {
      console.log(user);
      res.status(200).json(user)
    })
    .catch(next);
});

module.exports = router;