'use strict';

angular.module('webApp')
  .controller('UsersCtrl', function ($scope, Alerts) {
        function $mock(id, username, email, active)
        {
            return {
                id: id,
                username: username,
                email: email,
                active: active
            }
        }


        $scope.users = [
            $mock(1, "administrator", "admin@momsbloom.org", true),
            $mock(2, "user", "admin@momsbloom.org", true),
            $mock(3, "baduser", "admin@momsbloom.org", false)
        ];

        $scope.deleteUser = function(id)
        {
            //Make call to service to delete
            Alerts.addSuccess('User was deleted successfully');

        }
  });
