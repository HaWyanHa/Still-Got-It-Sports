module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: true
        },
            all: [ 'js/**/*.js' ]
        },

        sass: {               // task name
            project: {        // target name
                files: {
                    'build/css/main.css': 'js/scss/main.scss'
                }
            }
        },


        watch: {
            js: {
                files: [ 'js/**/*.js' ],
                tasks: [ 'js-build' ]
            },
            sass: {
                files: [ 'js/scss/*.scss' ],
                tasks: [ 'css-build' ]
            },
            html: {
                files: ['js/**/*.html'],
                tasks: ['copy:html']
            }
        },

        clean: [ 'build/' ],

        copy: {
            html: {
                expand: true,
                src: ['**/*.html'],
                dest: 'build/',
                cwd: 'js/'
            },
            img: {
                expand: true,
                src: ['**/*.png'],
                dest: 'build/',
                cwd: 'js/'
            }
        },

        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            js: {
                src: [ 'js/app/main.module.js', 'js/**/*.js' ],
                dest: 'build/js/main.js',
            },
        },





        karma: {
            app: {
                options: {
                    frameworks: ['mocha', 'chai'],
                    client: {
                        mocha: {
                            ui: 'tdd'
                        }
                    },
                    browsers: ['PhantomJS'],
                    singleRun: true,

                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'node_modules/angularfire/dist/angularfire.js',
                        'node_modules/firebase/lib/firebase-web.js',
                        'http://connect.facebook.net/en_US/sdk.js',
                        'js/app/main.module.js',
                        'js/controllers/login.controller.js',
                        'js/controllers/statController.js',
                        'js/factories/player.service.js',
                        'tests/specs/**/*.js'
                    ],

                    preprocessors: {
                        'js/controllers/**/*.js': ['coverage']
                    },
                    reporters: ['progress', 'coverage'],
                    coverageReporter: {
                        type: 'text-summary'
                    }

                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');








    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('js-build', ['jshint', 'concat:js']);
    grunt.registerTask('css-build', ['sass']);
    grunt.registerTask('default', ['clean', 'copy', 'js-build', 'css-build']);
};