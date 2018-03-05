'use strict';

/* Services */

angular.module('openWeatherApp.services', [])

    // Register service for openweathermap.com
  //
  // - Inject $resource from angular-resource context
  // - Generate custom resource object able to query open weather map api with custom parameters
  // -
  // - Tricky: Avoid needing a server/proxy by forcing a JSONP request: Angular handles callback
  //   if JSON_CALLBACK is set as function name parameter in which response should be wrapped
  //   (subject to be made configurable through service initialization so that server mode using
  //    "normal" json api is supported as well)
  //
  .service('openWeatherMapService',function($q,$http){
      var self = this;

      self.getCurrentForeCast = function(location){
        var targetUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+location+'&APPID=279b4be6d54c8bf6ea9b12275a567156';
        var deffered = $q.defer();
        var request = $http({
          method:'GET',
          url:targetUrl
        });
        request.then(function(response) {
          deffered.resolve(response);
        },function(error) {
          deffered.reject(error);
        });
        return deffered.promise;
      };
  });
