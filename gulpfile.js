'use strict';

var fs = require('fs');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var minifyCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');
var writeFile = require('write');

gulp.task('js', function() {
    return gulp.src([
		'./src/js/jquery-3.2.1.min.js',
		'./src/js/jquery.mobile.custom.min.js',
		'./src/js/script.js',
    ])
    .pipe(concat('script.js'))
    // .pipe(babel({
    //     compact: false,
    //     presets: ['env']
    // }))
	.pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
    return gulp.src([
        './src/css/reset.css',
		'./src/css/vars.css',
		'./src/css/fonts.css',
		'./src/css/style.css',
    ])
    .pipe(concat('style.css'))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('cssvars', ['css'], function() {
    var mycss = fs.readFileSync('./dist/css/style.css', 'utf8');

	var output = postcss([
        cssvariables()
    ])
    .process(mycss)
    .css;

	writeFile('./dist/css/style.css', output, function(err) {
		if (err) console.log(err);
	});
});

gulp.task('default', [
    'js',
    'css',
    'cssvars',
]);
