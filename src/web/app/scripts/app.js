'use strict';

angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/mothers', {
        templateUrl: 'views/mothers.html',
        controller: 'MothersCtrl'
      })
      .when('/mothers/new', {
        templateUrl: 'views/mothers/new.html',
        controller: 'MothersNewCtrl'
      })
      .when('/mothers/edit/:id', {
        templateUrl: 'views/mothers/edit.html',
        controller: 'MothersEditCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/new', {
        templateUrl: 'views/users/new.html',
        controller: 'UsersNewCtrl'
      })
      .when('/users/edit/:id', {
        templateUrl: 'views/users/edit.html',
        controller: 'UsersEditCtrl'
      })
      .when('/volunteers', {
        templateUrl: 'views/volunteers.html',
        controller: 'VolunteersCtrl'
      })
      .when('/volunteers/new', {
        templateUrl: 'views/volunteers/new.html',
        controller: 'VolunteersNewCtrl'
      })
      .when('/volunteers/edit/:id', {
        templateUrl: 'views/volunteers/edit.html',
        controller: 'VolunteersEditCtrl'
      })
      .when('/match/:id', {
        templateUrl: 'views/match.html',
        controller: 'MatchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(['$rootScope', '$location', '$http', '$cookies', function ($scope, $location, $http, $cookies) {   
        $scope.Logout = function(){
          $scope.isLoggedIn = false;
          return $location.path('/login');
        }

        $scope.$on('$routeChangeStart', function (event) {
          if(!($scope.isLoggedIn)){
            return $location.path('/login');
          }
        });

        if(!($scope.isLoggedIn)){
            return $location.path('/login');
        }
 }]);
