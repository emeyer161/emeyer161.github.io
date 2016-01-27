var express = require('express');
var router = express.Router();
var babelify = require('express-babelify-middleware');
var browserify = require('browserify');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/assets/views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'dist/img/', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('dist'));

// *** Put this into a static format vvv (Gulp, then WebPack)
// app.use('/Application.js', babelify( './src/assets/js/Application.js', { cache: false }) );

// Set database for access
// var db = require('./database.js');
// app.use(function(req,res,next){
//   req.db = db;
//   next();
// });

// GET front end app at the index route
app.get('/', function (req, res) {
  res.sendfile('./src/assets/views/index.html');
});

// Set the API route for posts database
var Api = require('./src/assets/js/Api');
app.use('/api', Api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


module.exports = app;

// purposely throw some errors
// figure out middleware
