const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Hello world!');
});

router.post('/create', (req, res) => {
  res.json(req.body);
});

module.exports = router;