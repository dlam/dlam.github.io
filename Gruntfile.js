module.exports = function(grunt) {

  var generateContentData = require('./grunt/content-data-generator.js');

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build-content-data', function() { generateContentData.call(this, grunt); });
  grunt.registerTask('default', ['build-content-data', 'jshint', 'uglify']);
};

