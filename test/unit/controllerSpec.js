/* jasmine specs for controllers go here */
describe('IonicCordovaExample app controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // nb!: important to include ionic
  beforeEach(module('ionic'));
  beforeEach(module('ngCordova'));
  beforeEach(module('starter.controllers'));
  beforeEach(module('appServices'));  

  // todo: how do we mock the navigator.connection?
  // candidate (or something simpler): https://github.com/jxp/phonegap-desktop/  
  describe('ConnectionCordovaCtrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('ConnectionCordovaCtrl', {$scope: scope});
    }));

    it('should ...', function() {

      expect(true).toBe(true);
      
    });

  });

  
  describe('PlaylistsCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {

      // note:
      // example of a fake request - not used in the test yet
      // but we keep it for now to ensure the angular mocks are loaded
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/some_data.json').
          respond([{name: 'Some data 1'}, {name: 'Some data 1'}]);

      scope = $rootScope.$new();
      ctrl = $controller('PlaylistsCtrl', {$scope: scope});
    }));


    it('should show 6 playlists', function() {

      expect(scope.playlists.length).toBe(6);
      
    });


  });
});
