var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.post('/signup', (req, res, next) => {
  const {
    username,
    name,
    password
  } = req.body;

  const user = new User({
    username,
    name
  });

  User.register(user, password, (err) => {
    if (err) {
      return next(err)
    }
    res.json({ success: true })
  })
});

module.exports = router;
