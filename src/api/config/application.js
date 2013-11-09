var mongo = require('./mongo')
  , session = require('./session')
  , passport = require('passport')
  , mongoose = require('mongoose')
  , express = require('express');

module.exports = {
  configure: function(app) {
    //connect to mongodb
    mongoose.connect('mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.db);

    //configure application middleware
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.bodyParser());
    app.use(express.urlencoded());
    app.use(express.methodOverride());

    //cookie and session
    app.use(express.cookieParser());
    app.use(express.session(session));

    //passport
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
  }
}
