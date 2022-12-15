const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('I am in node')
  res.render('index', { title: 'Express' });
});

router.get('/joke', (req, res, next) => {
  axios.get('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => console.log(err))
});

router.get('/joke2', async (req, res, next) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    res.json(response.data);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
