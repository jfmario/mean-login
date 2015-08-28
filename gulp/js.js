
var gulp = require ( 'gulp' );
var concat = require ( 'gulp-concat' );
var ngAnnotate = require ( 'gulp-ng-annotate' );
var sourcemaps = require ( 'gulp-sourcemaps' );
var uglify = require ( 'gulp-uglify' );

/*
    Concatenate all ng/js files into app.js. The module declaration in 
module.js must be first. The rest of the order does not matter.
*/
gulp.task ( 'js', function () 
{
    gulp.src ( [ 'ng/module.js', 'ng/**/*.js' ] )
        .pipe ( concat ( 'app.js' ))
        // escape ng syntax to make it uglifiable
        .pipe ( ngAnnotate () )
        // make it ugly
        .pipe ( uglify () )
        // preserve debugging source
        .pipe ( sourcemaps.write () )
        .pipe ( gulp.dest ( 'assets' ) );
});
/*
    A watcher is possible to re-minify every time a change is made, but I am
currently electing to run 'gulp js' every time. This is the code
*/
gulp.task ( 'watch:js', ['js'], function ()
{
    gulp.watch ( 'ng/**/*/js', [ 'js' ]);
});