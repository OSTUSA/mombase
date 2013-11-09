var Volunteer = require('../../lib/documents/volunteer'),
	volunteerService = require('../services/volunteerService');


/**
 * Create route
 */
exports.create = function(req, res){
	var body = req.body;
	volunteerService.save(body, function(err, result) {
		if ( err ) return res.send( 500, 'failure' );
		res.send(result);
	});
};

/**
 * Get route
 */
exports.get = function(req, res){
	var body = req.query;
	volunteerService.get( body.id, function ( err, result ) {
		if ( err ) return res.set( 500 ).send( );
		res.send( result );
	});
};

/**
 * Delete route
 */
exports.del = function(req, res){
	var body = req.body;
	volunteerService.delete(body.id, function(err, result) {
		if ( err ) return res.set( 500 ).send( );
		res.send('success');
	});
};

/**
 * Search route
 */
exports.search = function(req, res) {
	var body = req.body;
	var i;

	var filter = { };
	var filterKeys = [ 'firstName', 'lastName' ];
	for ( i = filterKeys.length; i--; ) {
		if ( body[ 'filter.' + filterKeys[ i ] ] ) {
			filter [ filterKeys[ i ] ] = body[ 'filter.' + filterKeys[ i ] ];
		}
	}

	var sort = { };
	var sortKeys = [ 'firstName', 'lastName' ];
	for ( i = sortKeys.length; i--; ) {
		if ( body[ 'sort.' + sortKeys[ i ] ] ) {
			sort [ sortKeys[ i ] ] = body[ 'sort.' + sortKeys[ i ] ];
		}
	}

	volunteerService.all(filter, sort, body.offset, body.take, function(err, result) {
		if ( err ) return res.set( 500 ).send( );
		res.send(result);
	});
};

exports.within = function(req, res){
	var kvps = req.query.split('&');
	var args = {};
	for(var k in kvps){args[k] = kvps.split('=')[1];}

	Volunteer.find(
		{ geo: { $nearSphere : {
			$geometry: {
				type: 'point',
				coordinates: [args['lat'],args['lng']]
			},
			$maxDistance: args['radius']
		}}},
		function(err, result){
			if(err) throw err;
			res.send(result);
		}
	); 
};
