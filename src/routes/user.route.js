import express from 'express';
import userController from '../controllers/user.controller'
import auth from '../middlewares/auth.middleware'

const router = express.Router();

router.post('/create', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userController.create(username, password)
    .then(user => {
      res.sendStatus(200);
    })
    .catch(next);
});

router.post('/authenticate', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userController.authenticate(username, password)
    .then(token => {
      console.log(token)
      res.status(200).json({
        token: token
      });
    })
    .catch(next);
});

module.exports = router;