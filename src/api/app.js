
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
  , app = express()
  , Volunteer = require('../lib/documents/volunteer');

config.configure(app);

//application routes
app.get('/', routes.index);
app.post('/api/users/login', user.login);
app.post('/api/users', user.create);

app.post('/api/volunteer/create', volunteer.create);

app.get('/api/mothers/:id', mother.get);
app.post('/api/mothers', mother.create);
app.del('/api/mothers', mother.del);
app.post('/api/mothers/search', mother.search);
app.del('/api/mothers', mother.update);

app.get('/api/volunteers', volunteer.get);
app.post('/api/volunteers', volunteer.create);
app.del('/api/volunteers', volunteer.del);
app.post('/api/volunteers/search', volunteer.search);
app.put('/api/volunteers', volunteer.update);


module.exports = app;


http.createServer(app).listen(app.get('port'), function(){
  Volunteer.setup();
  console.log('Express server listening on port ' + app.get('port'));
});
