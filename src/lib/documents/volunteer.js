var mongoose = require('mongoose');

var volunteerSchema = mongoose.Schema({
  // Contact Information
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: String,
  // Address Information
  address: {
    line1 : { type: String },
    line2 : { type: String },
    zip : { type: Number },
    city : { type: String },
    state : { type: String }
  },
  loc: { type : [Number], index: '2dsphere' },
  // Volunteer Skills ex: Nurse, Pyschiatrist, CPR, Juggling
  skills: [String],
  // Allergies (May be HIPPA concerns with this, could be removed)
  restrictions: [String],
  // Based on ISO-639-2  ( http://www.loc.gov/standards/iso639-2/php/code_list.php )
  languages: [String],
  availability: [{
    day: { type: Number, required: true},
    // Time in seconds into the day (from midnight)
    start: { type: Number, required: true},
    end: Number
  }],

  homeVisitLiason: Boolean
});

var volunteer = mongoose.model('Volunteer', volunteerSchema);

volunteer.setup = function() {
  mongoose.connection.db.collection('volunteers', function(err,coll) {
    if(!coll) {
      mongoose.connection.db.createCollection('volunteers', function(err,coll) {
        coll.ensureIndex({loc:'2dsphere'}, function(err, res){
          done();
        });
      });
    } else {
      coll.ensureIndex({loc:'2dsphere'}, function(err, res){
        done();
      });
    }
  });
}

module.exports = volunteer;