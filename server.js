const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const app      = express();
const PORT     = 3000;

// connect to database
const mongoURI = 'mongodb://localhost:27017/photo_comments';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// test db connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

// controllers
const photosController = require('./controllers/photos.js');
const commentsController = require('./controllers/comments.js');

// middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use('/photos', photosController);
app.use('/comments', commentsController);

// root route
app.get('/', (req, res) => res.redirect('/photos'));

// :ear
app.listen(PORT, () => { 
  console.log('===========================');
  console.log('Photo app on port: ', PORT);
  console.log('===========================');
});

