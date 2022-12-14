const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const user = {
    name: 'Alberto'
  }
  res.json(user);
});

module.exports = router;
