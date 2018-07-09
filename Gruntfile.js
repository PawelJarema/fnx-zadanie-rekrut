module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
                    script: 'app.js',
                    livereload: 35729
                }
            }
        },
        less: {
            development: {
                options: {
                  paths: ['css']
                },
                files: {
                    'css/styles.css' : 'css/styles.less',
                    'css/mobile.css' : 'css/mobile.less'
                }
            }
        },
        reload: {
            port: 6001,
            proxy: {
                host: 'localhost',
                port: 8080
            }
        },
        watch: {
            files: '**/*',
            options: {
                livereload: true
            },
            css: {
                files: '**/*.less',
                tasks: ['less']
            },
            tasks:'reload'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
   
    grunt.loadNpmTasks('grunt-reload');
    grunt.registerTask('dev',['express','less', 'watch']);
};