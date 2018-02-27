/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const jdists = require('gulp-jdists')
const rename = require('gulp-rename')
const replace = require('gulp-replace')

gulp.task('base64', () => {
  gulp
    .src('./src/base64.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'))
})

gulp.task('readme', () => {
  gulp
    .src('./src/README.jdists.md')
    .pipe(jdists({
      clean: false
    }))
    .pipe(rename('README.md'))
    .pipe(replace(/javascript:!function/g, 'javascript:void function'))
    .pipe(gulp.dest('./'))
})