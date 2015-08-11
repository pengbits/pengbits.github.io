
    // set up livereload and sass workflow with jekyll as inspired by
    // http://thanpol.as/jekyll/jekyll-and-livereload-flow/
    module.exports = function(grunt) 
    {
                        require('load-grunt-tasks')(grunt); 
        var _ =         require('underscore'),
            log =       grunt.log.writeln,
            logJson =   (function(str){ 
                log(JSON.stringify(str)); 
            }),
            
            rt=         grunt.registerTask
        ;
    
        
        grunt.initConfig({
        
            watch: {
                stylesheets:    {
                    files:  ['scss/**/*.scss'],
                    tasks:  ['sass:update','copy:css']
                },
                templates:      {
                    files:  ['*.html','*.md','*.yml','_posts/**','_includes/**','_layouts/**'],
                    tasks:  ['shell:jekyll']
                },
                javascripts:    {
                    files:  ['js/**/*.js']
                },
                options: {
                    'livereload': true, 'spawn':false
                }
            },
        
            sass: {
                update: {
                    options : {
                        'sourcemap': 'none',
                        'style': 'expanded',
                    },
                    files :   {
                        'css/index.css':'scss/index.scss',
                    }	
                }
            },
        
            copy: {
                css: {
                    files : {
                        '_site/css/index.css':'css/index.css'
                    }
                }
            },
        
            shell: {
                jekyll: {
                    command: 'rm -rf _site/*; jekyll build',
                    stdout: true
                }
            },
        
            connect : {
                server: {
                    options: {
                        port: 5000,
                        hostname: '*',
                        base: '_site'
                    }
                }
            }
        
        });
    
        rt('sass:refresh', ['sass:update','copy:css']);
        rt('develop', ['connect:server','watch']);
        rt('default', ['develop']);
      
    };

