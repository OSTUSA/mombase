
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
app.post('/api/users', user.create);

app.post('/api/volunteer/create', volunteer.create);

app.get('/api/mothers/:id', mother.get);
app.post('/api/mothers', mother.create);
app.del('/api/mothers', mother.del);
app.post('/api/mothers/search', mother.search);
app.put('/api/mothers', mother.update);

app.get('/api/volunteers', volunteer.get);
app.post('/api/volunteers', volunteer.create);
app.del('/api/volunteers', volunteer.del);
app.post('/api/volunteers/search', volunteer.search);
<<<<<<< HEAD
app.get('/api/volunteers/within', volunteer.within);
=======
app.put('/api/volunteers', volunteer.update);

>>>>>>> e378f01fa9d94b6970bd5f8190e576eec30c8e6f

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
