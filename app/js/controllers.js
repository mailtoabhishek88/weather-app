'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMapService',
      function($scope,openWeatherMapService) {

    $scope.message = '';
    

    // Expose example locations to $scope
    $scope.exampleLocations = ['London','Birmingham','Berlin','Athens','Tokyo'];
      $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // On initialization load data for first example entry
    openWeatherMapService.getCurrentForeCast($scope.exampleLocations[0]).then(function(resp){
        $scope.forecast = resp.data;
    },function(error){
      console.log(error);
    })

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function(location) {
      if (location == '' || location == undefined) {
        //$scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      openWeatherMapService.getCurrentForeCast(location).then(function(resp){
        $scope.forecast = resp.data;
      },function(error){
        console.log(error);
      })
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
