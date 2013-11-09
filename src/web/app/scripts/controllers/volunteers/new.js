'use strict';

angular.module('webApp')
  .controller('VolunteersNewCtrl', function ($scope, UsStates, LanguageCodes, Volunteer) {
    $scope.states = UsStates;
    $scope.langCodes = LanguageCodes;

    $scope.volunteer = {}
    $scope.volunteer.languages = [$scope.langCodes[0]];


    $scope.save = function()
    {

    }

    $scope.isFormValid = function(){
        return $scope.newVolunteer.$valid;
    }

    $scope.isFieldInvalid = function(name)
    {
        var field = $scope.newVolunteer[name];
        if(field)
        {
            return field.$dirty && field.$invalid;
        }
        else
            return true;
    }

  });
