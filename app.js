/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('./routes/index'); //was without '/index' in login example
var routes = require('./routes');
var users = require('./routes/users');
var calc = require("./routes/calc");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3001;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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

app.get('/', routes);
//app.get('/', routes.index);
app.post('/calcvalue', calc.calcValue);

app.listen(port, function(){
 // console.log("Listening on port %d", port);
});

module.exports = app;
*/


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// // production error handler
// // no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var routes = require('./routes')
    , user = require('./routes/users')
    , http = require('http');



var expressSession = require("express-session");

var calc = require("./routes/calc");

var app = express();

//all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//GET Requests
app.get('/', routes);
//app.get('/users', user.list);
//app.get('/homepage',login.redirectToHomepage);

//POST Requests
app.post('/calcvalue', calc.calcValue);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;