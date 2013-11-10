'use strict';

angular.module('webApp')
  .factory('loginService', function ($resource) {
    return $resource("/api/users/login")
  });
