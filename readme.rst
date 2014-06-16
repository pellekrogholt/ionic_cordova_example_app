===========================
 ionic_cordova_example_app
===========================

install and run
===============

::

    $ git clone <this project>
    $ npm install
    

unit tests
----------

::

    $ npm test



e2e tests
---------

first timer setup webdrive and more

::

    $ npm run preprotractor

then:

::

    $ npm run protractor
    

todos
=====

include mocks only for tests?
-----------------------------

for now we do in <project>/bower.json:

::

    "angular-mocks": "~1.2.17"


karma unit tests are loaded many times
--------------------------------------

probably related to some double configuration in the `Gruntfile.js`:

::

    $ npm test
    ...
    DEBUG [watcher]: Add file "/Users/pelle/dev/monsenso/spikes/cordova_tryouts/ionic_cordova_example_app/www/js/controllers.js" ignored. Already in the list.
    DEBUG [watcher]: Add file "/Users/pelle/dev/monsenso/spikes/cordova_tryouts/ionic_cordova_example_app/test/unit/controllerSpec.js" ignored. Already in the list.
    ...    



how to include the angular resource with bower
----------------------------------------------

if we have the bower.json

then on `bower install` we get:

::

    $ bower install
    bower cached        git://github.com/angular/bower-angular-resource.git#1.2.17
    bower validate      1.2.17 against git://github.com/angular/bower-angular-resource.git#1.2.17
    bower cached        git://github.com/angular/bower-angular.git#1.2.17
    bower validate      1.2.17 against git://github.com/angular/bower-angular.git#1.2.17
    bower cached        git://github.com/angular/bower-angular.git#1.2.18
    bower validate      1.2.18 against git://github.com/angular/bower-angular.git#1.2.18
    bower cached        git://github.com/angular/bower-angular.git#1.2.18
    bower validate      1.2.18 against git://github.com/angular/bower-angular.git#>= 1.0.8

    Unable to find a suitable version for angular, please choose one:
        1) angular#1.2.17 which resolved to 1.2.17 and is required by angular-resource#1.2.17 
        2) angular#~1.2.17 which resolved to 1.2.18 and is required by ionic#1.0.0-beta.7 
        3) angular#1.2.18 which resolved to 1.2.18 and is required by angular-animate#1.2.18 
        4) angular#>= 1.0.8 which resolved to 1.2.18 and is required by angular-ui-router#0.2.10

    Prefix the choice with ! to persist it to bower.json


    [?] Answer:
    ...
    
well ensure to use the included version of angular resource:

::

    
    lib/ionic/js/angular/angular-resource.js


its added as a forum question:

http://forum.ionicframework.com/t/bower-and-ionic-adding-angular-resource-the-right-way/5705/2




protractor: Cannot read property 'matcherFn_' of undefined
----------------------------------------------------------

i had a case with protractor raising:

    Cannot read property 'matcherFn_' of undefined

one timer for a solution:

::

    $ npm install protractor --save-dev

not sure though if this is a persistent solution e.g. on a fresh check out / installation
