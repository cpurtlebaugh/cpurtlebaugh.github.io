// Include gulp
var gulp = require('gulp');
var gutil = require('gulp-util');

// Include Plugins
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var deploy = require('gulp-gh-pages');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// gulp.task('default', ['watch', 'build-js', 'minify-css']);

// Watch Task
gulp.task('watch', function(){
    gulp.watch('js/*js', ['jshint']);
});

// JS Hint Task
gulp.task('jshint', function() {
    return gulp.src('js/*js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('build-js', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist'))
});

// Concatengate & Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(concat('all.min.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

// Deploy dist to GH pages
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});


// Default Task
