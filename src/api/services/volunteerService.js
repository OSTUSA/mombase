var Volunteer = require('../../lib/documents/volunteer'),
	mongoose = require('mongoose');

function VolunteerService() {

}

VolunteerService.prototype = {
	all: function( filter, sort, offset, take, cb ) {
		var _offset = 0; if ( offset ) _offset = offset;
		var _take = 10; if ( take ) _take = take;
		var _filter = { }; if ( filter ) _filter = filter;
		var _sort = { }; if ( sort ) _sort = sort;

		Volunteer.find( _filter, null, { skip: _offset, limit: _take, sort: _sort }, cb );
	},
	save: function( body, cb ) {
		var volunteer = new Volunteer(body);
		volunteer.save(cb);
	},
	get: function( id, cb ) {
		Volunteer.findOne( { _id: id }, cb );
	},
	delete: function( id, cb ) {
		Volunteer.remove( { _id: id }, cb );
	}
};

var that = null;

if ( !that ) {
	that = new VolunteerService( );
}

module.exports = that;