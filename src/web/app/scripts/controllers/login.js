'use strict';

angular.module('webApp')
  .controller('LoginCtrl', function ($scope, Authentication) {
  		$scope.user = {};

   		$scope.Login = function () {
   			Authentication.Login($scope.user.username, $scope.user.password);
   		}
  });
