'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Concat and uglify js
gulp.task('scripts', function() {
  return gulp.src([
    'js/ga.js',
    'js/main.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/'));
});

// Compile Sass
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist'));
});


// Tasks
gulp.task('build', ['sass', 'scripts'] );

gulp.task('watch', function () {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
});
