var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , User = require('../../../lib/documents/user')
  , assert = require('assert');

describe('POST /api/users/login', function() {

  before(function() {
    User.collection.drop();
    var user = new User({first:'Test', last:'User', email:'test@email.com', password:'test'});
    user.save();
  });

  it('should respond with 401 if not authorized', function(done) {
    request(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect(401, done);
  });

  it('should respond with 200 and user if authorized', function(done) {
    request(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .send({username:'test@email.com', password:'test'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.ok(res.res.body.first);
        assert.ok(res.res.body.last);
        done();
      });
  });
});
