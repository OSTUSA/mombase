'use strict';

angular.module('webApp')
    .controller('VolunteersEditCtrl', function ($scope) {

        $scope.isFormValid = function(){
            return $scope.editVolunteer.$valid;
        }

        $scope.isFieldInvalid = function(name)
        {
            var field = $scope.editVolunteer[name];
            if(field)
            {
                return field.$dirty && field.$invalid;
            }
            else
                return true;
        }
    });
