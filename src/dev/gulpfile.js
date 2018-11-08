//script paths
var gulp = require('gulp');
var del    = require('del')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var csso = require('gulp-csso');

var jsFiles = 'js/**/*.js'
var jsDest = '../prod/js';

var cssFiles = 'css/**/*.css'
var cssDest = '../prod/css';

var srcHtmlFiles = 'html/**/*.html'
var srcJsFiles = 'html/**/*.js'
var srcDest = '../prod/html';

gulp.task('clean', () => del(['dist']));

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {
  return gulp.src(cssFiles)
      .pipe(concat('styles.min.css'))
      .pipe(csso())
      .pipe(gulp.dest(cssDest));
});

gulp.task('pages', function() {
  return gulp.src(htmlFiles)
      .pipe(concat('index.html'))
      .pipe(gulp.dest(htmlDest));
});

gulp.task('html-pages', function() {
  return gulp.src(srcHtmlFiles)
      .pipe(concat('index.html'))
      .pipe(gulp.dest(srcDest));
});

gulp.task('js-pages', function() {
  return gulp.src(srcJsFiles)
      .pipe(concat('index.js'))
      .pipe(gulp.dest(srcDest));
});

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'scripts',
    'styles',
    'js-pages',
    'html-pages'
  );
});

