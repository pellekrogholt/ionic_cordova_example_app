'use strict';

/* Services */

(function(){

  var appServices = angular.module('appServices', []);


  // based on the ng-book (todo: add url)
  appServices
    .factory('Cordova', [
      '$q',
      '$ionicPlatform',
      function($q, $ionicPlatform){
        var d = $q.defer();
        if (window.navigator) {
          d.resolve(window.navigator);
        }else{
          // note:
          // ng-book uses -
          // document
          //   .addEventListener('deviceready', function(evt) {
          //     d.resolve(navigator);
          //   });
          // - but hey we are on ionic lets benefit of the api (http://ionicframework.com/docs/api/service/%24ionicPlatform):
          $ionicPlatform.ready(d.resolve(navigator));
        }
        return {
          navigator: function() {
            return d.promise;
          }
        };
      }]);

  })();
