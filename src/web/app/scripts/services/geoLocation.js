'use strict';

angular.module('webApp')
	.service('GeoLocation', function GeoLocation($rootScope, $http, $q, ErrorHandler) {
	// AngularJS will instantiate a singleton by calling "new" on this function

	this.GetLatLong = function(query){
		var defer = $q.defer();
		var apiUrl = 'http://maps.googleapis.com/maps/api/geocode/json?';
		var queryType = '', service = this;

		// ensure we have a query object
		if(!query){
			ErrorHandler.Log(service, 'Query object null');
			return null;
		}

		// snatch the first key, which will
		// identify the type of query we are making
		for(var k in query){
			queryType = k;
			break;
		}

		var formatQuery = function(){
			switch(queryType){
				case 'latlng':
					var latlng = query[queryType];
					return queryType + '=' + latlng[0] + ',' + latlng[1];
				case 'address':
					var addr = query[queryType].split(' ');
					return queryType + '=' + addr;
					break;
				default:
					ErrorHandler.Log(service, 'Unsupported query specified');
					return null;
			}
		};

		$http.defaults.useXDomain = true;
		$.ajax(apiUrl + formatQuery() + '&sensor=false',{
			success: function(data, status){
				var json = data, coord;
				if(json){
					var jsonObj = JSON.parse(json);
					var res = jsonObj.results;

					// check the status, be sure we have results
					if(jsonObj.status != 'OK' || !res.length){
						ErrorHandler.Log(service,
							'Google geoloc API status=' + jsonObj.status +
							', Results = ' + res
						);
						defer.resolve(null);
						$rootScope.$digest();
					}
					
					// pipe the data back
					defer.resolve({
						lat: res[0].geometry.location.lat,
						lng: res[0].geometry.location.lng
					});
					$rootScope.$digest();
				}
				else{
					ErrorHandler.Log(service, 'Data cannot be parsed as JSON');	
					defer.resolve(null);
					$rootScope.$digest();
				}

			},
			error: function(xhr, status){
				ErrorHandler.Log(service, 'HTTP error occured (' + status + ')');	
				defer.resolve(null);
				$rootScope.$digest();
			}
		});

		return defer.promise;
	};
});
