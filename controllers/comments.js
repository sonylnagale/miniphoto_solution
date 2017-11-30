const express = require('express');

const router = express.Router();

const Comment = require('../models/comments.js');

router.get('/', async (req, res) => {
  const allComments = await Comment.find().populate('photo');
  res.send(allComments);
});

router.post('/', async (req, res) => {
  console.log('body data: ', req.body);
  try {
    const createdComment = await Comment.create(req.body);
    res.redirect('/photos/' + createdComment.photo);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;





