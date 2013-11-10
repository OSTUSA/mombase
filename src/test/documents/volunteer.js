var assert = require("assert")
  , mongoose = require('mongoose')
  , Volunteer = require('../../lib/documents/volunteer')
  , VolunteerSvc = require('../../api/services/volunteerService');

describe('Volunteer', function(){

  before(function() {
    mongoose.connect('mongodb://localhost/momtest');
    Volunteer.collection.drop();
  });

	describe('#save()', function(){
		it('should save without error', function(done) {
			var volunteer = new Volunteer({
				firstName:'Brian',
				lastName:'Scaturro',
				email:'brian@email.com',
				geo: [
					13,
					37
				]
			});
			volunteer.save(function(err) {
				if (err) throw err;
				done();
			});
		});
	});

  after(function(){
    mongoose.disconnect();
  });

});
