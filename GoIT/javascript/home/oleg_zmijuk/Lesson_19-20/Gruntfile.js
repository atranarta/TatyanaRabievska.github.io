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
        
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'styles',
                src: ['*.scss'],
                dest: 'styles',
                ext: '.css'
              }]
            }
        }

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
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};