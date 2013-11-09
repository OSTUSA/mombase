var Mother = require('../../lib/documents/mother');

var MotherService = function() {

};

var that = null;

MotherService.prototype = {
  all: function( filter, sort, offset, take, cb ) {
    var _offset = 0; if ( offset ) _offset = offset;
    var _take = 10; if ( take ) _take = take;
    var _filter = { }; if ( filter ) _filter = filter;
    var _sort = { }; if ( sort ) _sort = sort;

    Mother.find( _filter, null, { skip: _offset, limit: _take, sort: _sort }, cb );
  },
  save: function( data, cb ) {
    var mother = new Mother( data );
    mother.save( cb );
  },
  get: function( id, cb ) {
    Mother.findOne( { _id: id }, cb );
  },
  delete: function( id, cb ) {
    Mother.remove( { _id: id }, cb );
  }
};

if ( !that ) {
  that = new MotherService( );
}

module.exports = that;


