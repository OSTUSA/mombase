'use strict';

angular.module('webApp')
  .controller('VolunteersCtrl', function ($scope, Volunteer) {

        $scope.volunteers = [];
        console.log(Volunteer);
        Volunteer.search(function(data){
            $scope.volunteers = data;
        });
  });
