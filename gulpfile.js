var gulp = require ( 'gulp' );
// simple task example
// $ gulp hello
gulp.task ( 'hello', function ()
{
    console.log ( 'Hello from gulp!' );
});
// run other tasks first
gulp.task ( 'welcome', [ 'hello' ], function ()
{
    console.log ( 'And welcome to this thing.' );
});


// allows me to break up the gulp
var fs = require ( 'fs' );
fs.readdirSync ( __dirname + '/gulp' )
    .forEach ( function ( task ) 
    {
        require ( './gulp/' + task );
    });
    
// meta-tasks
// the ultimate
gulp.task ( 'dev', [ 'dev:server', 'watch:css', 'watch:js' ]);