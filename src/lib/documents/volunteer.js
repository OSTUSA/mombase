var mongoose = require('mongoose');

var volunteerSchema = mongoose.Schema({
  // Contact Information
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, unique: true},
  phone: String,
  // Address Information
  address: {
    line1 : { type: String },
    line2 : { type: String },
    zip : { type: Number },
    city : { type: String },
    state : { type: String }
  },
  loc: { type : [Number], index: '2d' },
  // Availability of the volunteer ex: 'Nights and weekends'
  availability: String,
  // The drive time for the volunteer
  driveTime: String,
  // Volunteer Skills ex: Nurse, Pyschiatrist, CPR, Juggling
  skills: [String],
  // Short bio about the volunteer
  bio: String,
  // Allergies (May be HIPPA concerns with this, could be removed)
  restrictions: [String],
  // Based on ISO-639-2  ( http://www.loc.gov/standards/iso639-2/php/code_list.php )
  languages: [String],
  // We've decided to just use a simple string instead
  // availability: [{
  //   day: { type: Number },
  //   // Time in seconds into the day (from midnight)
  //   start: { type: Number },
  //   end: Number
  // }],

  homeVisitLiason: Boolean
});

var volunteer = mongoose.model('Volunteer', volunteerSchema);

volunteer.setup = function(cb) {
  mongoose.connection.db.collection('volunteers', function(err,coll) {
    if(!coll) {
      mongoose.connection.db.createCollection('volunteers', function(err,coll) {
        coll.ensureIndex({loc:'2d'}, function(err, res){
          cb && cb();
        });
      });
    } else {
      coll.ensureIndex({loc:'2d'}, function(err, res){
          cb && cb();
      });
    }
  });
}

module.exports = volunteer;
