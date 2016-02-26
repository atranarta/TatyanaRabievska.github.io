module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['script/tmpl.js',
                     'script/slider.js',
                     'script/template.js',
                     'script/script.js'
                     ],
                dest: 'script/build/production.js'
            }
        },

        uglify: {
            build: {
                src: 'script/build/production.js',
                dest: 'script/build/production.min.js'
            }
        },

        //        watch: {
        //            scripts: {
        //                files: ['js/*.js'],
        //                tasks: ['concat', 'uglify'],
        //                options: {
        //                    spawn: false,
        //                },
        //            }
        //        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['concat', 'uglify']);

};