var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , Mother = require('../../../lib/documents/mother')
  , assert = require('assert');

describe('POST /api/mothers', function() {

  before(function() {
    Mother.collection.drop();
  });

  it('should create mother', function(done) {
    request(app)
      .post('/api/mothers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'test@email.com', emergencyContact: { firstName: 'bill', lastName: 'clinton'}})
      .expect(200)
      .end( function(err, res) {
      	if(err) return done(err);
      	assert.ok(res.res.body.firstName);
      	assert.ok(res.res.body.lastName);      	
      	done();
      });
  });

  it('should not create duplicate mother', function(done) {
    request(app)
      .post('/api/mothers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'test@email.com', emergencyContact: { firstName: 'bill', lastName: 'clinton'}})
      .expect(500, done);
  });


});
