'use strict';

angular.module('webApp')
  .controller('MatchCtrl', function ($scope, $routeParams, GeoLocation, Mother) {
//	var promise = GeoLocation.GetLatLong({address: '720 E Fulton St. Grand Rapids, Michigan 49503'});
//	promise.then(
//		function(e){
//			alert('winner: ' + e);
//      console.dir(e);
//		},
//		function(e){
//			alert('Failure: ' + e);
//		}
//	);

    Mother.get({id: $routeParams.id}, function(data) {
      console.dir(data);
      $scope.mom = data;
    });
});
