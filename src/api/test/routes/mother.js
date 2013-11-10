var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , Mother = require('../../../lib/documents/mother')
  , assert = require('assert');

describe('POST /api/mothers', function() {

  before(function() {
    Mother.collection.drop();
  });

  var createdUser;
  var searchUserId;

  it('should create mother', function(done) {
    request(app)
      .post('/api/mothers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'test@email.com', emergencyContact: { firstName: 'bill', lastName: 'clinton'}})
      .expect(200)
      .end( function(err, res) {
      	if(err) return done(err);
      	createdUser = res.res.body;
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


  it('should search for mothers', function(done) {
    request(app)
      .post('/api/mothers')
      .set('Accept', 'application/json')
      .send({firstName:'search', lastName: 'user', email: 'search@email.com', emergencyContact: { firstName: 'bill', lastName: 'clinton'}})
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        searchUserId = res.res.body._id;
        assert.ok(res.res.body.firstName);
        assert.ok(res.res.body.lastName);
        request(app)
          .post('/api/mothers/search')
          .set('Accept', 'application/json')
          .send({})
          .expect(200)
          .end( function(err, res) {
            if(err) return done(err);
            assert( res.body.length == 2 );
            assert( res.body[0].firstName == 'test' );
            assert( res.body[1].firstName == 'search' );
            done();
          });
      });
  });


  it('should search for mothers with sorting', function(done) {
    request(app)
      .post('/api/mothers/search')
      .set('Accept', 'application/json')
      .send({'sort.firstName':'1'})
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        assert( res.body.length == 2 );
        assert( res.body[0].firstName == 'search' );
        assert( res.body[1].firstName == 'test' );
        done();
      });
    });

  it('should delete a mother', function( done ) {
    request(app)
      .del('/api/mothers')
      .set('Accept', 'application/json')
      .send({'id':searchUserId})
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        done();
      });
  });

  it('should update a mother', function( done ) {
    createdUser.firstName = 'tested';
    request(app)
      .put('/api/mothers')
      .set('Accept', 'application/json')
      .send(createdUser)
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        done();
      });
  });
});
