<<<<<<< HEAD
const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

//#Routes
const index = require('./routes/index/index.route'),
      users = require('./routes/users/users.route'),
      neos = require('./routes/neos/neos.route');

const app = express();

=======
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config");

var routes = require('./routes/index');

var app = express();
app.set('xecret', config.secret);
>>>>>>> 32a01333fa1a86cfb73728371b257bdf44f2a9f1
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'node_modules/meshcontrols')));

app.use('/', index);
app.use('/users', users);
//#API
app.use('/api/v1',neos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
=======

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
>>>>>>> 32a01333fa1a86cfb73728371b257bdf44f2a9f1
  err.status = 404;
  next(err);
});

<<<<<<< HEAD
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

=======
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


>>>>>>> 32a01333fa1a86cfb73728371b257bdf44f2a9f1
module.exports = app;
