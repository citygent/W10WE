var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var logger   = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// DB Connection
mongoose.connect('mongodb://localhost:27017/i-like-angular-js');

// Middleware shiz
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing config
var routes = require('./config/routes');
app.use(routes); // method-override?

// Startup
app.listen(port, function() {
  console.log('API listening on port ' + port);
  console.log('MongoDB is called i-like-angular-js');
});