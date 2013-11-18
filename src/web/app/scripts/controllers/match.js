'use strict';

angular.module('webApp')
  .controller('MatchCtrl', function ($scope, $routeParams, GeoLocation, RangeOptions, Mother, Volunteer) {
    $scope.rangeOptions = RangeOptions;
    $scope.selectedRange = _.find($scope.rangeOptions, function(x) { return x.selected === true;});

    Mother.get({id: $routeParams.id}, function(data) {
      $scope.mom = data;
      $scope.FindWithin();
    });

    $scope.FindWithin= function() {
      var range = $scope.selectedRange.value;
      $scope.mom.loc = $scope.mom.loc || [0,0];

      Volunteer.within({
        lon: $scope.mom.loc[1],
        lat: $scope.mom.loc[0],
        radius: range / 3959.0
      }, function(data){
        $scope.volunteers = data;
      });
    };

    var address = function(address) {
      var keys = Object.keys(address)
        , values = keys.map(function(k) { return address[k] });
      return values.join(', ');
    };
})
.controller('MatchRowCtrl', function($rootScope, $scope, Mother) {
    $scope.address = function() {
      $scope.volunteer.address || ($scope.volunteer.address = {});
      var keys = Object.keys($scope.volunteer.address)
        , values = keys.map(function(k) { return $scope.volunteer.address[k] });
      return values.join(', ');
    };

    $scope.assignVolunteer = function(volunteerEmail) {
      Mother.assign({id: $scope.mom._id, volunteerEmail: volunteerEmail}, function(data){
        $scope.mom = data;
      });
    };

    $scope.unassignVolunteer = function(volunteerEmail) {
      Mother.unassign({id: $scope.mom._id, volunteerEmail: volunteerEmail}, function(data){
        $scope.mom = data;
      });
    };
});
