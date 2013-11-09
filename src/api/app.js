
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , mother = require('./routes/mother')
  , volunteer = require('./routes/volunteer')
  , config = require('./config/application')
  , app = express();

config.configure(app);

//application routes
app.get('/', routes.index);
app.post('/api/users/login', user.login);
app.post('/api/volunteer/create', volunteer.create);

app.get('/api/mothers', mother.get);
app.post('/api/mothers', mother.create);
app.del('/api/mothers', mother.del);
app.post('/api/mothers/search', mother.search);

app.get('/api/volunteers', volunteer.get);
app.post('/api/volunteers', volunteer.create);
app.del('/api/volunteers', volunteer.del);
app.post('/api/volunteers/search', volunteer.search);

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
