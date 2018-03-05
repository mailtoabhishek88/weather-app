'use strict';

// Declare app level module which depends on filters, and services
angular.module('openWeatherApp', [
  'ngRoute',
  'openWeatherApp.filters',
  'openWeatherApp.services',
  'openWeatherApp.directives',
  'openWeatherApp.controllers'
]).
config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'views/forecast.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
