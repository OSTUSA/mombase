var Volunteer = require('../../lib/documents/volunteer'),
	volunteerService = require('../services/volunteerService');


/**
 * Create route
 */
exports.create = function(req, res){
	var body = req.body;
	volunteerService.save(body, function(err, result) {
		if(err) throw err;
		res.send(result);
	});
};

/**
 * Get route
 */
exports.get = function(req, res){
	var body = req.query;
	volunteerService.get( body.id, function ( err, result ) {
		if ( err ) throw err;
		res.send( result );
	});
};

/**
 * Delete route
 */
exports.del = function(req, res){
	var body = req.body;
	volunteerService.delete(body.id, function(err, result) {
		if(err) throw err;
		res.send('success');
	});
};

exports.search = function(req, res) {
	var body = req.body;
	var filter = { };
	var filterKeys = ['firstName', 'lastName'];
	for(var i = filterKeys.length; i--;) {
		if(body['filter.' + filterKeys[i]]) {
			filter[filterKeys[i]] = body['filter.' + filterKeys[i]];
		}
	}
	console.log(filter);

	volunteerService.all(filter, body.sort, body.offset, body.take, function(err, result) {
		if(err) throw err;
		res.send(result);
	});

exports.within = function(req, res){
	var kvps = req.query.split('&');
	var args = {};
	for(var k in kvps){args[k] = kvps.split('=')[1];}

	Volunteer.find(
		{ geo: { $nearSphere : {
			$geometry: {
				type: 'point',
				coordinates: [args['lat'],args['lng']],
			},
			$maxDistance: args['radius']
		},
		function(err, result){
			if(err) throw err;
			res.send(result);
		}
	); 
}


