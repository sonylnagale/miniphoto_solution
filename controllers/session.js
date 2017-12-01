const express = require('express');
const router = express.Router();
const User   = require('../models/users');

router.get('/', (req, res, next) => {
  res.render('photos/login.ejs', {});
});

router.post('/', (req, res) => {
  req.session.username = req.body.username;
  req.session.logged   = true;
  res.redirect('/');
});

router.get('/register', (req, res, next) => {
  res.render('photos/register.ejs', {})
});

router.get('/retrieve', (req, res) => {
	if(req.session.username === "sonyl"){//test to see if that value exists
		req.session.username = "sonyl";
	} else {
		req.session.username = "not allowed";
	}

  res.render('photos/retrieve.ejs', { username: req.session.username});
});

router.get('/logout', (req, res) => {
  req.session.destroy();

  res.redirect('/');
})

// export the controller
module.exports = router;
