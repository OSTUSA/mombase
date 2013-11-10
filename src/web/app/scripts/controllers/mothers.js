'use strict';

angular.module('webApp')
  .controller('MothersCtrl', function ($scope, Mother) {
    $scope.moms = [];
    console.log(Mother);
    Mother.search(function(data){
      $scope.moms = data;
    });
  });
