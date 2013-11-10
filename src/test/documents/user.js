var assert = require("assert")
  , mongoose = require('mongoose')
  , User = require('../../lib/documents/user');


describe('User', function(){

  before(function() {
    mongoose.connect('mongodb://localhost/momtest');
    User.collection.drop();
    var user = new User({first:'Test', last:'User', email:'test@email.com', password:'test'});
    user.save();
  });

  after(function(){
    mongoose.disconnect();
  });

  describe('#save()', function(){
    it('should save without error', function(done) {
      var user = new User({first:'Brian', last:'Scaturro', email:'brian@email.com', password:'mypass'});
      user.save(function(err) {
        if (err) throw err;
        done();
      });
    });

    it('should throw error if duplicate email is added', function(done) {
      var user = new User({first:'Brian', last:'Scaturro', email:'test@email.com', password:'mypass'});
      user.save(function(err, u) {
        assert(err);
        done();
      });
    });

    it('should save a hashed password', function(done) {
      var user = User.findOne({email:'brian@email.com'}, function(err, u) {
        if (err) throw err;
        assert.ok(u.hash);
        done();
      });
    });

    it('should have a virtual id', function(done) {
      var user = User.findOne({email:'brian@email.com'}, function(err, u) {
        if (err) throw err;
        assert.ok(u.id);
        done();
      });
    });
  });

  describe('#comparePassword()', function() {
    it('should give positive isMatch if passwords match', function() {
      var user = User.findOne({email:'test@email.com'}, function(err, u) {
        if (err) throw err;
        assert.ok(u.comparePassword('test'));
      });
    });

    it('should throw err if passwords match', function() {
      var user = User.findOne({email:'test@email.com'}, function(err, u) {
        if (err) throw err;
        assert.ifError(u.comparePassword('wrong'));
      });
    });
  });
});
