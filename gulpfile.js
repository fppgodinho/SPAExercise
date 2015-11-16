var gulp        = require("gulp");
var browserify  = require('browserify');
var jadeify     = require('jadeify');
var source      = require("vinyl-source-stream");
var buffer      = require('vinyl-buffer');
var jade        = require('gulp-jade');
var minifyHTML  = require('gulp-minify-html');
var less        = require('gulp-less');
var minifyCSS   = require('gulp-minify-css');
var sourcemaps  = require('gulp-sourcemaps');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');

var Server      = require('karma').Server;

gulp.task('default', ['client']);

gulp.task('client', ['client-compile', 'client-copy-html', 'client-compile-jade', 'client-compile-less'], function()    {
    console.log("\n Watching code:\n");
    //
    return gulp.watch('./src/**/*.*', ['client-compile', 'client-copy-html', 'client-compile-jade', 'client-compile-less'], function(){
        console.warn("\n --- Code has been edited, recompiling...");
    });
});

gulp.task('client-compile', function()                                                                                  {
    var bundler = browserify('./src/bootstrap.js', {debug:false, insertGlobals:true});
    bundler.transform(jadeify);
    return bundler.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(streamify(uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/lib/application/'));
});

gulp.task('client-copy-html', function()                                                                                {
    return gulp.src('./src/**/*.html')
        .pipe(minifyHTML({
            conditionals:   true,
            spare:          true
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('client-compile-jade', function()                                                                             {
    return gulp.src(['./src/**/*.jade', '!**/part/*.*'])
        .pipe(jade({locals: {}}))
        .pipe(gulp.dest('./public/'))
});

gulp.task('client-compile-less', function () {
    gulp.src(['./src/**/*.less', '!**/part/*.*'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/'));
});


gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        action: 'run'
    }, done).start();
});