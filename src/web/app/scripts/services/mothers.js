'use strict';

angular.module('webApp')
  .factory('Mother', function Mothers($resource) {
    var resource = $resource("api/mothers/:id/:action",
      {id: '@id', action: '@action'},
      {
        search: {method: 'POST', isArray: true, params: {action: 'search'}}
      });

    return resource;
  });
