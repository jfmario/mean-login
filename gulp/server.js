
var gulp = require ( 'gulp' );
var nodemon = require ( 'gulp-nodemon' );

/* 
    Restart the server whenever any non-ignored js file is changed.
*/
gulp.task ( 'dev:server', function ()
{
    nodemon (
        {
            ext: 'js',
            ignore: [ 'assets*', 'gulp*', 'ng*' ],
            script: 'server.js'
        });
});