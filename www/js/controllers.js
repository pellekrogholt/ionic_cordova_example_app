'use strict';

(function(){

  var starterControllers  = angular.module('starter.controllers', ['appServices', 'ngCordova']);
  
  starterControllers
    .controller('AppCtrl', [
      '$scope',
      function($scope) {        
      }]);

  starterControllers
    .controller('PlaylistsCtrl', [
      '$scope',
      function($scope) {
        $scope.playlists = [
          { title: 'Reggae', id: 1 },
          { title: 'Chill', id: 2 },
          { title: 'Dubstep', id: 3 },
          { title: 'Indie', id: 4 },
          { title: 'Rap', id: 5 },
          { title: 'Cowbell', id: 6 }
        ];
      }]);

  starterControllers
    .controller('PlaylistCtrl', [
      '$scope',
      '$stateParams',
      function($scope, $stateParams) {
    
      }]);

  starterControllers
    .controller('ConnectionCtrl', [
      '$scope',
      '$log',
      '$cordovaNetwork',
      function($scope, $log, $cordovaNetwork) {

        var connectionType = 'undefined';
        $scope.connectiontype = connectionType;

        try {
          $log.log($cordovaNetwork.getNetwork());
          $scope.connectiontype = $cordovaNetwork.getNetwork();
        } catch (e) {
          // probably:
          // ->
          // TypeError: Cannot read property 'type' of undefined
          // at Object.getNetwork (file:///android_asset/www/lib/ng-cordova/dist/ng-cordova.js:851:34)
          // ...          
          $log.log('$cordovaNetwork.getNetwork()', e);
        };
        
        $scope.connectionType = function () {        
          $scope.connectiontype = $cordovaNetwork.getNetwork();
        };
    
      }]);

  starterControllers
    .controller('ConnectionCordovaCtrl', [
      '$scope',
      '$log',
      'Cordova',
      function($scope, $log, Cordova) {

        var connectionType = 'undefined';
        $scope.connectiontype = connectionType;
        
        Cordova.navigator().then(function(navigator) {
          $log.log(navigator);
          // console:
          // V CordovaNavigator
          //   > connection: NetworkConnection 
          $log.log(navigator.connection);
          // console:          
          // > undefined

          if (navigator.connection !== undefined) {
            $log.log(navigator.connection.type);
            $scope.connectiontype = navigator.connection.type;            
          } else {
            $scope.connectiontype = 'navigator.connection is undefined';
            $log.log('navigator.connection.type cant be called because navigator.connection is undefined');
          }
          
        });
        
        $scope.connectionType = function () {

          $scope.connectiontype = '...we are about to get the connection type...';
          
          Cordova.navigator().then(function(navigator) {
            // at this point we can expect navigator but not navigator.connection
            if (navigator.connection !== undefined) {
              $log.log(navigator.connection);
              // -> NetworkConnection {type: "wifi", getInfo: function}
              $log.log(navigator.connection.type);
              // -> "wifi"
              $scope.connectiontype = navigator.connection.type;
            }
            
          });
        };        
    
      }]);  

  })();
