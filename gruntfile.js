module.exports = function(grunt) {

  // 1. All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'app/**/*.js', // server files
        'pub/js/**/*.js', // client files
      ]
    },
    //TODO: mocha unit-tests

    concat: {
      deps: {
          src: [
            'pub/libs/jquery/dist/jquery.js',
            'pub/libs/angular/angular.js',
            'pub/libs/angular-ui-router/angular-ui-router.js',
            'pub/libs/materialize/dist/js/materialize.js',
            'pub/libs/angular-materialize/angular-materialize.js',
          ],
          dest: 'pub/build/js/swigit_client_deps.js'
      },
      libs: {
          src: [
            'pub/libs/medium-editor/dist/js/medium-editor.js',
            'pub/libs/angular-medium-editor/dist/js/angular-medium-editor.js',
          ],
          dest: 'pub/build/js/swigit_client_libs.js'
      },
      dist: {
          src: [ 'pub/js/**/*.js', 'pub/js/*.js'],
          dest: 'pub/build/js/swigit_client.js'
      }
    },

    uglify: {
      deps: {
        src: 'pub/build/js/swigit_client_deps.js',
        dest: 'pub/build/js/swigit_client_deps.min.js'
      },
      libs: {
        src: 'pub/build/js/swigit_client_libs.js',
        dest: 'pub/build/js/swigit_client_libs.min.js'
      },
      dist: {
        src: 'pub/build/js/swigit_client.js',
        dest: 'pub/build/js/swigit_client.min.js'
      }
    },

    //NOTE: requires sass to be installed on your machine
    //> gem install sass
    sass: { 
      libs: {
        options: {
          style: 'compressed'
        },
        files: [{
            src: 'pub/build/css/materialize.min.css',
            dest: 'pub/libs/materialize/sass/materialize.scss'
        }]
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
            expand: true,
            src: ['pub/sass/*.scss'],
            dest: 'pub/build/css/swigit_client.min.css'
        }]
      }
    },

    css: {
      files: ['pub/sass/*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false,
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['pub/assets/**/*.{png,jpg,gif}'],
          dest: 'pub/assets/img/src/'
        }]
      }
    },

    watch: {
      options: { //NOTE: requires LiveReload browser extension
        livereload: true,
      },
      scripts: {
        files: [
            'pub/js/*.js',
            'pub/js/**/*.js',
            'pub/sass/*.scss'
        ],
        tasks: [
          'jshint',
          'concat:dist',
          'uglify:dist',
          'css'
        ],
        options: {
          spawn: false,
        },
      } 
    }

  });

  // Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  

  grunt.registerTask('default', [
    'jshint',
    'concat',
    'uglify',
    'imagemin',
    'sass',
    'watch'
  ]);

  //TODO: setup env settings for deployment & testing

};