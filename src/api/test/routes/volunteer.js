var request = require('supertest')
  , app = require('../../app.js')
  , mongoose = require('mongoose')
  , Volunteer = require('../../../lib/documents/volunteer')
  , assert = require('assert')
  , bootstrap = require('./bootstrap');

describe('POST /api/volunteers', function() {

 before(function(done) {
   Volunteer.setup(done);
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
    var volunteer = new Volunteer({firstName:'test', lastName: 'test', email: 'test@email.com'});
    volunteer.save(function(err) {
      if (err) throw err;
      request(app)
        .post('/api/volunteers')
        .set('Accept', 'application/json')
        .send({firstName:'test', lastName: 'test', email: 'test@email.com'})
        .expect(500, done);
    });
  });

  it('should search for volunteers', function(done) {
    var volunteer1 = new Volunteer({firstName:'test', lastName: 'test', email: 'test@email.com'});
    volunteer1.save(function(err) {
      if (err) throw err;
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
  });


  it('should search for volunteers with sorting', function(done) {
    var volunteer1 = new Volunteer({firstName:'test', lastName: 'test', email: 'test2@email.com'});
    volunteer1.save(function(err) {
      if (err) throw err;
      var volunteer2 = new Volunteer({firstName:'search', lastName: 'user', email: 'search2@email.com'});
      volunteer2.save(function(err) {
        if (err) throw err;
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
    });

  });

  
  it('should delete a volunteer', function( done ) {
    var volunteer1 = new Volunteer({firstName:'test', lastName: 'test', email: 'test@email.com'});
    volunteer1.save(function(err) {
      if (err) throw err;
      Volunteer.findOne({firstName:'test'}, function(err, vol) {
        request(app)
          .del('/api/volunteers/' + vol._id)
          .set('Accept', 'application/json')
          .send({'id':searchUserId})
          .expect(200)
          .end( function(err, res) {
            if(err) return done(err);
            done();
          });
      });
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

 it('should find a volunteer within', function( done ) {

    request(app)
      .post('/api/volunteers')
      .set('Accept', 'application/json')
      .send({firstName:'test', lastName: 'test', email: 'radius@email.com', loc: [-20.0, 5.0] })
      .end( function(err, res) {
        if(err) return done(err);

       request(app)
         .get('/api/volunteers/within?lat=-20&lon=5&radius=' + ( 1.0 / 3959.0))
         .set('Accept', 'application/json')
         .expect(200)
         .end( function(err, res) {
           if(err) return done(err);
           assert(res.res.body);
           assert(res.res.body.length == 1);
           done();
         });
      });



 });

 it('should not find a volunteer outside of it', function( done ) {
   request(app)
     .get('/api/volunteers/within?lon=50&lat=50&radius=' + ( 5.0 / 3959.0))
     .set('Accept', 'application/json')
     .expect(200)
     .end( function(err, res) {
       if(err) return done(err);
       assert(res.res.body);
       assert(res.res.body.length == 0);
       done();
     });
 });


});
