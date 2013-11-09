
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/momsbloom');

var express = require('express');
var passport = require('passport');
var routes = require('./routes');
var user = require('./routes/user');
var volunteer = require('./routes/volunteer');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var User = require('../lib/documents/user');
var mother = require('./routes/mother');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.cookieParser());
app.use(express.session({
  secret: 'Mombase knows best'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/api/users/login', user.login);
app.post('/api/volunteer/create', volunteer.create);

app.get('/api/mother', mother.get);
app.post('/api/mother', mother.create);

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
