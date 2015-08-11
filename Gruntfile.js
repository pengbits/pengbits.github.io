module.exports = function(grunt) 
{
    require('load-grunt-tasks')(grunt); 
    var _ =     require('underscore'),
        log =   grunt.log.writeln
    //, logJson =   (function(str){ log(JSON.stringify(str)); })
    ;
    
    //var watch_options= {'livereload': true, 'spawn':false};
    
    grunt.initConfig({
        
        sass: {
            options : {
                'banner' : '/* pengbits */',
                'sourcemap':    'none'
            },
            
            update:    {
                files :   {
                    'css/index.css':'scss/index.scss',
                },

                options: {
                    'style':        'expanded'
                }
            }	
        },
        
        watch: {
            stylesheets:    {
                files:['scss/**/*.scss'],
                tasks:['sass:update']
            },
            templates:      {},
            javascripts:    {},
            options: {
                'livereload': true, 'spawn':false
            }
            
        }
        
    });
    
    // load external tasks.
    // todo: move unorthadox imports above into this style of include:
    // grunt.loadTasks('./Gruntisms/tasks');
    
};