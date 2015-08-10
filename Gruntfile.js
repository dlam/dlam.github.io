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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build-content-data', function() { generateContentData.call(this, grunt); });
  grunt.registerTask('default', ['build-content-data', 'uglify']);
};
