'use strict';

angular.module('webApp')
  .controller('MothersEditChildCtrl', ["$scope", "$injector", "$routeParams", "$location", "breadcrumbs", function ($scope, $injector, $routeParams, $location, breadcrumbs) {
        var FormValidation = $injector.get("FormValidationHelper"),
            Mother  =    $injector.get("Mother"),
            Child   =    $injector.get("Child"),
            Alerts  =    $injector.get("Alerts");

        $scope.currentChild = {};

        $scope.form = new FormValidation($scope, 'childForm');

        $scope.mother = Mother.get(
            {id: $routeParams.id},
            function(mom){
                var child = _.find(mom.children, {_id: $routeParams.cid});

                if(child.birthDate)
                    child.birthDate = $scope.helpers.date.format(child.birthDate);

                if(child.baby && child.baby.dueDate)
                    child.baby.dueDate = $scope.helpers.date.format(child.baby.dueDate);

                $scope.currentChild = child;
            },
            function(){
                Alerts.addError('Unable to find the mother.');
            });

        $scope.save = function()
        {
            if(!$scope.form.isFormValid()) return;

            var child = new Child($scope.currentChild);

            child.$update(
                {
                    mid: $scope.mother._id,
                    id: $scope.currentChild._id
                },
                function(){
                    Alerts.addSuccess('Child information was updated successfully');
                    $location.path(['/mothers', $scope.mother._id, 'children'].join('/'));
                }, function(){
                    Alerts.addError('Unable to update child.  Please review the form and try again.');
                });
        }
  }]);
