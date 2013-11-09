// Generated on 2013-10-24 using generator-angular 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    mochaTest: {
      options: {

      },
      src: [ 'test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test', ['mochaTest']);

};