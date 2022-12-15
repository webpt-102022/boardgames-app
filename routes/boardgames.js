
const express = require('express');
const router = express.Router();
const bgData = require('../data/boardgames');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('boardgamesView', { bgData });
});

module.exports = router;