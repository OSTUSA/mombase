'use strict';

angular.module('webApp')
  .service('Authentication', function Authentication( $rootScope, $location, loginService ) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    	function Login(username, password){
    		var login = new loginService({username:username, password:password});
    		login.$save(function(u){
    			if(u){
    				$rootScope.isLoggedIn = true;
    				$rootScope.username = u.username;
    				return $location.path('/');
    			}
    		});
    	}

    	function Logout(){
    		$rootScope.isLoggedIn = false;
    		$rootScope.username = null;
    		return $rootScope.isLoggedIn
    	}

    	function IsLoggedIn(){
    		return $rootScope.isLoggedIn;
    	}

    	return{
    		Login: Login,
    		Logout: Logout,
    		IsLoggedIn: IsLoggedIn
    	}
  });
