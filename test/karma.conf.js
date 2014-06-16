module.exports = function(config){
  config.set({

    basePath : '../',


    // todo: enable when seeting up ng-cordiova
    //   'www/lib/ng-cordova/dist/ng-cordova.js',
    files: [
      // Include jQuery only for testing convience (lots of DOM checking for unit tests on directives
      'http://codeorigin.jquery.com/jquery-1.10.2.min.js',
      'www/lib/angular/angular.js',
      'www/lib/angular-animate/angular-animate.js',
      'www/lib/angular-sanitize/angular-sanitize.js',
      'www/lib/angular-mocks/angular-mocks.js',      
      'www/lib/angular-ui-router/release/angular-ui-router.js',
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/ionic/js/ionic-angular.js',
      'www/js/**/*.js',
      'test/unit/**/*.js'      
    ],

    exclude: [
      'js/ext/angular/test/dom-trace.js'
    ],

    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: 'OFF', 'ERROR', 'WARN', 'INFO', 'DEBUG'
    logLevel: 'DEBUG',
    autoWatch: true,
    captureTimeout: 60000,
    singleRun: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome']
    
  });    
};
