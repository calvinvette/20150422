'use strict';
// Singleton/Factory
angular.module('tApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/Login', {
        templateUrl: 'scripts/controllers/LoginRegistration/LoginRegistration.html',
        controller: 'LoginRegistration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
