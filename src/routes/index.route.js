import express from 'express';
import auth from '../middlewares/auth.middleware'

const router = express.Router();

router.get('/', auth, (req, res, next) => {
  res.json('Hello world!');
});

module.exports = router;