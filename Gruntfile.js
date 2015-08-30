module.exports = function(grunt) {

  var generateContentData = require('./grunt/content-data-generator.js');

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'src/js/*.js',
        dest: 'build/src/<%= pkg.name %>.min.js'
      }
    },

    jshint: {
      app: {
        src: ['src/js/*.js']
      },
      options: {
        // Enforcing options
        curly: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        futurehostile: true,
        latedef: true,
        noarg: true,
        nocomma: true,
        nonbsp: true,
        nonew: true,
        singleGroups: true,
        // TODO(dustin): Think of a nice way to add "use strict".
        // strict: true,
        undef: true,
        unused: true,
        // Environments
        browser: true
      }
    },

    clean: ['build'],

    webfont: {
      icons: {
        src: 'res/fonts/material-icons/*.svg',
        dest: 'build/res/fonts',
        destCss: 'build/src',
        options: {
          font: 'material-icons',
          // TODO(dustin): Re-enable this after enabling incremental builds.
          hashes: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('build-content-data', function() { generateContentData.call(this, grunt); });
  grunt.registerTask('default', ['clean', 'build-content-data', 'webfont', 'jshint', 'uglify']);
};

