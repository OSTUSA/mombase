var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , Volunteer = require('../../../lib/documents/volunteer')
  , assert = require('assert');

describe('POST /api/volunteers', function() {

  before(function() {
    Volunteer.collection.drop();
    // Volunteer.db.db.createCollection('volunteers', function(err, coll) {
    //   coll.ensureIndex({loc:'2dsphere'}, function(err, res){
    //     done();
    //   });
    // });
  });

  var createdUser;
  var searchUserId;

  it('should create volunteer', function(done) {
    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'test@email.com', loc: [-20.0, 5.0] })
      .expect(200)
      .end( function(err, res) {
      	if(err) return done(err);
        createdUser = res.res.body;
      	assert.ok(res.res.body.firstName);
      	assert.ok(res.res.body.lastName);      	
      	done();
      });
  });

  it('should not create duplicate volunteer', function(done) {
    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'test@email.com'})
      .expect(500, done);
  });

  it('should search for volunteers', function(done) {
    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send({firstName:'search', lastName: 'user', email: 'search@email.com'})
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        searchUserId = res.res.body._id;
        assert.ok(res.res.body.firstName);
        assert.ok(res.res.body.lastName);
        request(app)
          .post('/api/volunteers/search')
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


  it('should search for volunteers with sorting', function(done) {
    request(app)
      .post('/api/volunteers/search')
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

  
  it('should delete a volunteer', function( done ) {
    request(app)
      .del('/api/volunteers')
      .set('Accept', 'application/json')
      .send({'id':searchUserId})
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        done();
      });
  });


  it('should update a volunteer', function( done ) {
    createdUser.firstName = 'tested';
    request(app)
      .put('/api/volunteers')
      .set('Accept', 'application/json')
      .send(createdUser)
      .expect(200)
      .end( function(err, res) {
        if(err) return done(err);
        done();
      });
  });


});
