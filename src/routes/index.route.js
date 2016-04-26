import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('Hello world!');
});

router.get('/hello', (req, res, next) => {
  res.json('Hello world!');
});

export default router;