'use strict';

/* 
 * docs: http://docs.angularjs.org/guide/dev_guide.e2e-testing 
 * api: https://github.com/angular/protractor/blob/master/docs/api.md
 *
 * remember:
 * 1.) binding is one way binding  
 * 2.) model is two way binding
 *
 */
describe('IonicCordovaExample App', function() {
  
  it('should redirect root to playlists', function() {

    browser.get('/#/app');
    
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/app/playlists');
    });
    
  });
  
});
