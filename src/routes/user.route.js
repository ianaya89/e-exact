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
      res.sendStatus(200);
    })
    .catch(next);
});

router.post('/authenticate', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userController.authenticate(username, password)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;