module.exports = function(grunt) {
    'use strict';

    grunt.config.set('shell', {
        cleanNodeModules: {
            command: () => 'rm -rf node_modules',
        },
    });
};
