
/*jslint node: true */
'use strict';

let fs = require('fs');
let path = require('path');

//
// allJSPackages is the global array of npm-publishable packages in this monorepo.
// This is all folders inside the /packages folder that start with the prefix
// "basic-".
const JS_PACKAGE_FOLDER = 'js-packages';
const POLYMER_PACKAGE_FOLDER = 'polymer-packages';
const allJSPackages = fs.readdirSync(JS_PACKAGE_FOLDER).filter(fileName => {
  let filePath = path.join(JS_PACKAGE_FOLDER, fileName);
  let stat = fs.statSync(filePath);
  return stat && stat.isDirectory() && fileName.startsWith('js-');
});

//
// Build the global buildList object for use in browserify:components
//
function buildBuildList() {

  let srcFiles = allJSPackages.map(pkg => {
      return 'js-packages/' + pkg + '/src/*.js';
  });

  let obj = {
    'build/js-web-components.js': srcFiles
  };

  allJSPackages.forEach(pkg => {
    obj['js-packages/' + pkg + '/dist/' + pkg + '.js'] = ['js-packages/' + pkg + '/src/*.js'];
});

  // Special cases: dist gets built from the es5globals file.
  obj['js-packages/js-component-mixins/dist/js-component-mixins.js'] = 'js-packages/js-component-mixins/es5globals.js';

  return obj;
}
const buildList = buildBuildList();

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({

    clean: {
      build: 'build'
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },
      buildFiles: {
        files: buildList
      },
      watch: {
        files: buildList,
        options: {
          keepAlive: true,
          watch: true
        }
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'js-packages/**/*.js',
        '!js-packages/**/dist/*',
        '!js-packages/**/lib/*'
      ],
      options: {
        jshintrc: true
      }
    }
  });

  //
  // Default task - prints to the console the tasks that are available to be run from the command line
  //
  grunt.registerTask('default', function () {
    grunt.log.writeln('grunt commands this project supports:\n');
    grunt.log.writeln('  grunt build (builds consolidated basic-web-components.js, all package distributions, all documentation, and all tests)');
    grunt.log.writeln('  grunt lint (runs jshint on all .js files)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  //
  // The build task is callable from the command line and executes the browserify:buildFiles task
  // defined in the Grunt config. This task builds ES5 transpiled files written to each package's
  // dist folder. A developer who uses "npm install" on that package can import the resulting
  // JavaScript file(s) from the package's dist folder without the need for Babel in an ES5
  // ecosystem.
  //
  // Note that this task also builds each package's README.md file via the docs task.
  //
  // This task makes use of the buildList global array.
  //
  grunt.registerTask('build', ['browserify:buildFiles', 'jshint']);

  //
  // The lint task is callable from the command line and executes the jshint task defined
  // in the Grunt config. This task looks for JavaScript warnings/errors.
  //
  grunt.registerTask('lint', ['jshint']);

  //
  // The watch task is callable from the command line and executes the browserify:watch task
  // defined in the Grunt config. This task performs a build and then watches for changes
  // for instant update during development.
  //
  grunt.registerTask('watch', ['browserify:watch']);
  
}

