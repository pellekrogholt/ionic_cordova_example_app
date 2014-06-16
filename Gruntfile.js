// Generated on 2014-05-07 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/unit/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/unit/**/*.js'


module.exports = function (grunt) {

  // needed?
  grunt.loadNpmTasks('grunt-html-angular-validate');
  

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'www',
      dist: 'dist',
      jsdir: 'js',
      partials: 'templates'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.app %>/<%= yeoman.jsdir %>/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          // bug in the generator - look up git
          //livereload: true
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: [
          'test/unit/{,*/}*.js',
          '<%= yeoman.app %>/<%= yeoman.jsdir %>/**/*_spec.js'
        ],
        tasks: ['newer:jshint:test', 'karma']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/{,*/}*.css',
          '<%= yeoman.app %>/**/*.js'
        ]
      }
    },

    // The actual grunt server settings
    // todo/note: port 8000 might collide with the npm run serve in package.json
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            //'.tmp', mostly for sass compilation
            '<%= yeoman.app %>' // this is a template relax keep
          ]
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/<%= yeoman.jsdir %>/**/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: [
          'test/unit/{,*/}*.js',
          '<%= yeoman.app %>/<%= yeoman.jsdir %>/**/*_spec.js'

        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    // Validate markup
    // don't run it for each test because it uses w3c validator service
    // todo: setup a git hook
    htmlangular: {
      options: {
        tmplext: 'tmpl.html',
        customtags: [
          'ion-nav-view',
          'ion-view',
          'ion-content',
          'ion-side-menus',
          'ion-pane',
          'ion-side-menu-content',
          'ion-nav-bar'
        ],
        customattrs: [
          'selected',
          'scrolling'
        ],
        relaxerror: [
            'The frameborder attribute on the iframe element is obsolete. Use CSS instead.'
        ],
        reportpath: 'target/html-angular-validate-report.json'        
      },
      files: {
        src: [
          '<%= yeoman.app %>/index.html',
          '<%= yeoman.app %>/<%= yeoman.jsdir %>/**/*.html',
          '<%= yeoman.app %>/<%= yeoman.partials %>/{,*/}*.html'
        ]
      },
    }
    
  });

  grunt.registerTask('serve', [
      'connect:livereload',
      'watch'    
  ]);

  grunt.registerTask('validatehtml', [
      'htmlangular'    
  ]);

  
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    'serve'
  ]);
};
