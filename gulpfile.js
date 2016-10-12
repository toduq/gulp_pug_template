var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var webserver = require('gulp-webserver');

var PUG_FILE = 'src/**/*.pug';
var SASS_FILE = 'src/**/*.sass';
var OTHERS = ['src/**', '!'+PUG_FILE, '!'+SASS_FILE];

gulp.task('pug', function(){
	gulp.src(PUG_FILE)
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('public'));
});
gulp.task('sass', function(){
	gulp.src(SASS_FILE)
		.pipe(plumber())
		.pipe(sass())
		.pipe(pleeease())
		.pipe(gulp.dest('public'));
});

gulp.task('default', function(){
	gulp.watch(PUG_FILE, ['pug']);
	gulp.watch(SASS_FILE, ['sass']);
	gulp.src('public')
		.pipe(webserver({
			livereload: true,
			open: true
	}));
});
