var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , Volunteer = require('../../../lib/documents/volunteer')
  , assert = require('assert');

describe('POST /api/volunteers', function() {
	var testVol = {firstName:'test', lastName: 'test', email: 'test@email.com', geo:[13,37]};
	
  before(function() {
    Volunteer.collection.drop();
  });

  it('should create volunteer', function(done) {
    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send(testVol)
      .expect(200)
      .end( function(err, res) {
      	if(err) return done(err);
      	assert.ok(res.res.body.firstName);
      	assert.ok(res.res.body.lastName);      	
      	done();
      });
  });

  it('should not create duplicate volunteer', function(done) {
    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send(testVol)
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

	it('should find the inserted user via geo indices', function(done){
	    request(app)
		.get('/api/volunteers/within')
		.set('Accept', 'application/json')
		.send({'lat':'12', 'lng':'37', 'radius':'5'})
		.expect(200)
		.end( function(err, res) {
			if(err) return done(err);
			assert( res.body.length == 2 );
			assert( res.body[0].firstName == 'test' );
        		assert( res.body[1].firstName == 'test' );
        		done();
      		});
	
	});
});
