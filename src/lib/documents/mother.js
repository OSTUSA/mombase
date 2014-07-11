var mongoose = require('mongoose');

var motherSchema = mongoose.Schema({

  // Contact Information
  firstName: {type: String, required: true},
  nickName: String,
  lastName: {type: String, required: true},
  birthdate: Date,
  email: {type: String, unique: true},
  phone: String,

  // Address Information
  address: {
    line1 : String,
    line2 : String,
    city : String,
    county: String,
    zip : Number,
    state : String
  },
  loc: { type : [Number] },

  // Important Dates
  createdDate: Date,
  serviceStartedDate: Date,
  serviceEndedDate: Date,
  referredBy: String,

  // Children
  children: [ {
    firstName: String,
    nickName: String,
    lastName: String,

    gender: Boolean, // Male: True - Female: False
    birthDate: Date,
    receivingServices: Boolean,
    specialNeeds: String,
    siblings: String,

    baby: {
      dueDate: Date,
      deliveryType: String,
      birthWeight: Number,
      birthComplications: String,
      measuredWeights: {
        recorded: Date,
        weight: Number
      },
      bottleFeeding: Boolean // Bottle Feeding: True - Breast Feeding: False
    },

    commentsConcerns: String
  }],

  // Documents & Responses Sent/Received Response
  communication: {
    requestForServices: {
      sent: Date, // Date that response for the service was sent
      response: Date // Date received the request
    },
    waiver: {
      sent: Date,
      response: Date
    }
  },

  // Communications
  availability:  Number,  // 0 = Any, 1 = AM, 2 = PM
  howDidYouFind: String,
  referralDetails: String,

  // Based on ISO-639-2  ( http://www.loc.gov/standards/iso639-2/php/code_list.php )
  languages: [String],

  // Medical Information (May be removed due to HIPPA Reasons)
  restrictions: [String],
  smoking: String,
  pets: String,
  pediatrition: [String],
  ethnicity: String,
  emergencyContact: {
    firstName: {type: String },
    nickName: String,
    lastName: {type: String },
    email: String,
    phone: String
  },

  // Volunteer ID's (e-mail addresses)
  volunteers: [String],
  primaryVolunteer: String,

  // Each visit of the family
  visits: [{
    moods: [{
      name: String,
      mood: String
    }],
    challenges: String,
    volunteers: [String],
    startDate: Date,
    endDate: Date
  }],

  commentsNotes: String
});

module.exports = mongoose.model('Mother', motherSchema);
